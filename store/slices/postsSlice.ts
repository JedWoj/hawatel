import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from '../async/fetch-posts';

const postSlice = createSlice({
    name: "user",
    initialState: {
        activePage: 1,  
        posts: {} as any,
        comments: {} as any,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.comments = state.comments;
            state.posts = state.posts;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.comments = action.payload.comments;
            state.posts = action.payload.posts;
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.comments = state.comments;
            state.posts = state.posts;
        })
    },
    reducers: {
        setActivePage(state, action: PayloadAction<number>) {
            state.activePage = action.payload;
        }
    }
});

export const userActions = postSlice.actions;
export default postSlice;