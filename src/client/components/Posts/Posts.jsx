/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';
import { getPosts, selectAllPosts } from '../../features/posts/postsSlice.js';

import Post from './Post/Post.jsx';

const Posts = () => {
	const posts = useSelector(selectAllPosts);
	const isLoading = useSelector((state) => state.posts.isLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoading) dispatch(getPosts());
	}, [isLoading, dispatch]);

	return (
		isLoading ? <CircularProgress /> : (
			<Grid className="container" container alignItems="stretch" spacing={3} >
				{
					posts.map((post) => (
						<Grid key={post._id} itme xs={12} sm={6}>
							<Post post={post} />
						</Grid>
					))
				}
			</Grid>
		)
	);
};

export default Posts;