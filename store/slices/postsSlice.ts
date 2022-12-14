import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from '../async/fetch-posts';

const postSlice = createSlice({
    name: "user",
    initialState: {
        activePostPage: 1,  
        posts: {},
        comments: {},
        postRequestStatus: '',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.postRequestStatus = 'pending';
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.comments = action.payload.comments;
            state.posts = action.payload.posts;
            state.postRequestStatus = 'success';
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.postRequestStatus = 'failed';
        })
    },
    reducers: {
        setActivePostPage(state, action: PayloadAction<number>) {
            state.activePostPage = action.payload;
        }
    }
});

export const userActions = postSlice.actions;
export default postSlice;