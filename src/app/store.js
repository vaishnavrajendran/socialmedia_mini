import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/PostsSlice'

export const store = configureStore({
    reducer:{
        posts:postsReducer
    }
})