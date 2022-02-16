import React from 'react';
import { useGetCommentsQuery, commentsApi } from '../redux'
import { useSelector, useDispatch } from 'react-redux'
import { addNewComments } from '../redux/commentsSlice'
import { Comment } from './Comment';


export const CommentsList = () => {

    const { data, isLoading, refetch } = useGetCommentsQuery('', {}) //commentsApi.useGetCommentsQuery('', {})

    const comments: [] = useSelector((state: any) => state.comments)
    const dispatch = useDispatch()
  
  
    const handleGetComments = () => {
      refetch()
      dispatch(addNewComments(data.comments))
    }
    console.log(data)
    console.log(data && data.comments)
    console.log(data && data.nextCursor)
    console.log(comments, 'dd')


    return (
        <div>
          {isLoading && <h1>loading...</h1>}

            <ul>
            {comments && comments.map((item: any) => {
                return <Comment key={item.id} comment={item}/>
            })}
            </ul>

            <button onClick={handleGetComments}>refetch</button>

        </div>
    )
}