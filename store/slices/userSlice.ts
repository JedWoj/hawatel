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
            //TODO: show user info about downloading
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            //TODO: show user info that fetching failed
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