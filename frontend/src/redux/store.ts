import { configureStore } from '@reduxjs/toolkit'
import { commentsApi } from './commentsApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import commentsSlice from './commentsSlice'
import { commentsReducer } from './commentsSlice'


/* store */


export const store = configureStore({
    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer, //commentsApi
        comments: commentsReducer,          //comments
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(commentsApi.middleware)
})

// setupListeners(store.dispatch) //?