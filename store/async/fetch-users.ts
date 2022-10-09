import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersType } from "../../types/UserType";

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (http: string) => {
    const response = await fetch(http);
    const users: UsersType = await response.json();
    return {users};
});