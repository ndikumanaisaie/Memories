/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();

		res.status(200).json(postMessages);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const {
		creator, title, message, tags, selectedFile,
	} = req.body;

	const newPostMessage = new PostMessage({
		creator, title, message, tags, selectedFile,
	});

	try {
		await newPostMessage.save();

		res.status(201).json(newPostMessage);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updatePost = async (req, res) => {
	try {
		const { id: _id } = req.params;
		const post = req.body;

		if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
	} catch (error) {
		console.log(error);
	}
}
