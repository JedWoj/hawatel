import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../async/fetch-users';
import { UsersType } from '../../types/UserType';

const userSlice = createSlice({
    name: "user",
    initialState: {
        activePage: 1,  
        // users: {data: null,meta: {
        //     pagination: {
        //         limit: 10,
        //         links: {
        //             current: 'https://gorest.co.in/public/v1/users',
        //             next: null,
        //             previous: null,
        //         },
        //         page: 0,
        //         pages: 0,
        //         total: 0,
        //     }
        // }}
        users: [] as any,
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