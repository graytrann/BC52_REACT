import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (params, { dispatch, getState }) => {
    try {
      // dispatch({ type: GET_POSTS_PENDING });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // dispatch({ type: GET_POSTS_FULFILLED, payload: response.data });
      return response.data;
    } catch (error) {
      // dispatch({ type: GET_POSTS_REJECTED, error: error.response.data });
      throw error.response.data;
    }
  }
);
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  // Bắt và xử lý các action được dispatch từ createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
