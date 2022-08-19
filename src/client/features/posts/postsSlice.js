import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { fetchPosts, createPost } from '../../api/index.js';

// const url = 'http://localhost:5000/posts';

const initialState = {
	posts: [],
	isLoading: true,
	error: null,
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
	const response = await fetchPosts();
	return response.data;
});

export const addNewPost = createAsyncThunk(
	'posts/addNewPost',
	// The payload creator receives the partial `{creator, title, message, tags:[], selectedFile}`
	async (newPost) => {
		// save the new post to the database
		const response = await createPost(newPost);

		// The response from the database will include the complete object and assigned unique ID's
		return response.data;
	},
);

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getPosts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				// Add any fetched posts to the array
				state.posts.concat(action.payload);
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				console.log(action.payload);
				state.posts.push(action.payload);
			});
	},
});
console.log(postsSlice);
export default postsSlice.reducer;