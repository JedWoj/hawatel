import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostsType } from "../../types/PostType";
import { CommentsType } from "../../types/CommentType";
import { getFormattedPromise } from "../../utils/getFormattedPromise";

export const fetchPosts = createAsyncThunk('user/fetchPosts', async (page: number) => {
    const [posts, comments]: [PostsType, CommentsType] = await Promise.all([
        getFormattedPromise(`https://gorest.co.in/public/v1/posts?page=${page}`),
        getFormattedPromise(`https://gorest.co.in/public/v1/comments?page=${page}`),
    ]);
    return {posts, comments};
});