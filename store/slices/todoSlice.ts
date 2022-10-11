import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodos } from '../async/fetch-todos';

const todoSlice = createSlice({
    name: "user",
    initialState: {
        activeTodosPage: 1,  
        todos: {},
        todosRequestStatus: '',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.todosRequestStatus = 'pending';
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload.todos;
            state.todosRequestStatus = 'success';
        })
        builder.addCase(fetchTodos.rejected, (state) => {
            state.todosRequestStatus = 'failed';
        })
    },
    reducers: {
        setActiveTodosPage(state, action: PayloadAction<number>) {
            state.activeTodosPage = action.payload;
        }
    }
});

export const userActions = todoSlice.actions;
export default todoSlice;