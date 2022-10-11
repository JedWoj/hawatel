import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../async/fetch-users';

const userSlice = createSlice({
    name: "user",
    initialState: {
        activePage: 1,  
        users: {},
        userRequestStatus: '',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.userRequestStatus = 'pending';
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.userRequestStatus = 'success';
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.userRequestStatus = 'failed';
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