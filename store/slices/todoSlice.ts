import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodos } from '../async/fetch-todos';

const todoSlice = createSlice({
    name: "user",
    initialState: {
        activeTodosPage: 1,  
        todos: {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload.todos;
        })
        builder.addCase(fetchTodos.rejected, (state) => {
            
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