import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../async/fetch-users';

const userSlice = createSlice({
    name: "user",
    initialState: {
        activePage: 1,  
        users: {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.users = state.users;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.users = state.users;
        })
    },
    reducers: {
        setActivePage(state, action: PayloadAction<number>) {
            state.activePage = action.payload;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;