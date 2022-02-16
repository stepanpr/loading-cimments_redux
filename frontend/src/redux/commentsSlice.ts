import { createSlice, PayloadAction } from '@reduxjs/toolkit'


/* срез */

interface CommentsState {
    arr: [] | undefined
  }

const initialState: any = [] 
// const initialState: CommentsState = {
//     arr: [],
//     action: 
//     // comment: {}
// } as CommentsState


 const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {

        addNewComments: (state: any, action: any) => {
            // reducer: (state: any, action: any) => {
            // state.push(action.payload)/
            return [...state, ...action.payload]
            // }
            // return ['§','21']
        }

        // getDataofComment(state)

    }

})


export const { addNewComments } = commentsSlice.actions
export default commentsSlice.reducer
export const commentsReducer = commentsSlice.reducer
