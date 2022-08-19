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
