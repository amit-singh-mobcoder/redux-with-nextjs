import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../features/todos/todosSlice'
import counterReducer from '@/features/counter/counterSlice'

export const store = configureStore({
    reducer:{
        todos: todoReducers,
        counter: counterReducer,
    },
})

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;