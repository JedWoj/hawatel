import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import postSlice from "./slices/postsSlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        post: postSlice.reducer,
        todo: todoSlice.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;