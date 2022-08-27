/* eslint-disable no-underscore-dangle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, createPost, updatePost } from '../../api/index.js';

const initialState = {
	posts: [],
	isLoading: true,
	currentId: null,
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
export const editPost = createAsyncThunk(
	'posts/editPost',
	// The payload creator receives the updatedPost and its Id
	async (updatedPost, id) => {
		// update the post with the specified Id
		const response = await updatePost(id, updatedPost);

		// The response from the database will include the complete object and assigned unique ID's
		return response.data;
	},
);

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getCurrentId(state, action) {
			state.currentId = action.payload;
			console.log(state.currentId);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getPosts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				// Add any fetched posts to the array
				state.posts = state.posts.concat(action.payload);
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				state.posts.push(action.payload);
			})
			.addCase(editPost.fulfilled, (state, action) => {
				state.posts.map((post) => (post._id === action.payload._id ? action.payload : post));
			});
	},
});
export const { getCurrentId } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
