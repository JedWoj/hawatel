import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodosType } from '../../types/TodosType';

export const fetchTodos = createAsyncThunk('user/fetchTodos', async (http: string) => {
    const response = await fetch(http);
    const todos: TodosType = await response.json();
    return {todos};
});