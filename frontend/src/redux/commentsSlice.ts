import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { act } from 'react-dom/test-utils'


/* slice */

// interface CommentsState {
//     arr: Array<any>,
//     action: Array<any>
//   }


// const initialState: any[] = [] 
const initialState = {
    commentsArr: Array(0),
    commentObj: {},
    // comment: {}
} 
// const initialState: CommentsState = {
//     arr: [],
//     action: 
//     // comment: {}
// } as CommentsState


 const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {

        addNewComments: (state, action) => {
            // return [...b, ...a]
            //записываем элементы поступающего нового массива в state 
            action.payload.map((item: any) => state.commentsArr.push(item)) 
        },
        getDataOfComment(state, action) {

        }

        // getDataofComment(state)

    }

})


export const { addNewComments } = commentsSlice.actions
export default commentsSlice.reducer
export const commentsReducer = commentsSlice.reducer
