/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import {
	TextField, Button, Typography, Paper,
} from '@mui/material';

import './styles.css';
import { addNewPost, editPost } from '../../features/posts/postsSlice.js';

const Form = () => {
	const [postData, setPostData] = useState({
		creator: '', title: '', message: '', tags: '', selectedFile: '',
	});

	const postId = useSelector((state) => state.posts.currentId);
	const dispatch = useDispatch();

	const currentPost = useSelector((state) => (postId ? state.posts.posts
		.find((post) => post._id === postId) : null));

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (postId) {
			dispatch(editPost(currentPost, postId));
		} else {
			await dispatch(addNewPost(postData)).unwrap();
		}
	};

	const clear = (e) => {
		e.preventDefault();
		setPostData({
			creator: '', title: '', message: '', tags: '', selectedFile: '',
		});
	};

	return (
		<Paper className="paper">
			<form autoComplete='off' noValidate className="form" onSubmit={handleSubmit}>
				<Typography>Creating a memory</Typography>
				<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={ (e) => setPostData({ ...postData, creator: e.target.value })} />
				<TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={ (e) => setPostData({ ...postData, title: e.target.value })} />
				<TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={ (e) => setPostData({ ...postData, message: e.target.value })} />
				<TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={ (e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
				<div className="file-input">
					<FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
				</div>
				<Button className="btn-submit" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
				<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear form</Button>
			</form>
		</Paper>
	);
};

export default Form;