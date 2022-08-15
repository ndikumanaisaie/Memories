import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	creator: '',
	title: '',
	message: '',
	tags: [],
	selectedFile: '',
	isLoading: true,
};

const postsSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {

	},
});
console.log(postsSlice);
export default postsSlice.reducer;