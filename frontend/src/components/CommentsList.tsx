import React from 'react'
import { useGetCommentsQuery, commentsApi } from '../redux'
import { useSelector, useDispatch } from 'react-redux'
import { addNewComments, getComment } from '../redux/commentsSlice'
import { Comment } from './Comment'

/***** IComment
 ** @param {string} id            идетификатор
 ** @param {string} parentId      идентификатор родителя
 ** @param {IComment[]} children  массив дочерних комментариев (создается и заполняется в nestedComments())
 ** @param {string} user          имя пользователя
 ** @param {string} text          текст комментария
 *
 */

/***** ICommentFull
 ** @param {IComment} comment     комментарий IComment
 ** @param {boolean} isChildren   если равно true, то добавляется отступ margin-left к стилю комментария
 */

export interface IComment {
  id: string
  parentId: string
  children?: IComment[]
  user: string
  text: string
}

export interface ICommentFull {
  comment: IComment
  isChildren: boolean
}

export const CommentsList: React.FC = () => {
  const { data, isError, isLoading, refetch } = useGetCommentsQuery('', {}) //commentsApi.useGetCommentsQuery('', {})

  /* достаем из стора стейт (объект) */
  const reduxState = useSelector((state: any) => state.comments)
  const dispatch = useDispatch()

  const nestedComments = (commentsArray: IComment[]) => {
    const hashTable: any = {}
    commentsArray.forEach(
      (comment: IComment) =>
        (hashTable[comment.id] = { ...comment, children: [] })
    )
    const nestedComments: IComment[] = []
    commentsArray.forEach((comment: IComment) => {
      if (comment.parentId)
        hashTable[comment.parentId].children.push(hashTable[comment.id])
      else nestedComments.push(hashTable[comment.id])
    })
    return nestedComments
  }

  const handleGetComments = () => {
    refetch()
    dispatch(addNewComments(data.comments))
  }

  return (
    <div>
      {isLoading && <h1>loading...</h1>}
      {isError && <h1>error</h1>}

      <ul>
        {reduxState &&
          nestedComments(reduxState.commentsArr).map((comment: IComment) => {
            return (
              <Comment key={comment.id} comment={comment} isChildren={false} />
            )
          })}
      </ul>

      <button
        className="w-full font-bold text-pink-200 bg-indigo-900 rounded py-3 px-20 text-white mx-auto mt-10"
        onClick={handleGetComments}
      >
        Load more...
      </button>
    </div>
  )
}
