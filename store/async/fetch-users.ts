import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (http: string) => {
    const response = await fetch(http);
    const users = await response.json();
    return {users};
});