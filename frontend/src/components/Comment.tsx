import React from 'react'
import { IComment, ICommentFull } from './CommentsList'

export const Comment: React.FC<ICommentFull> = ({
  comment,
  isChildren,
}: ICommentFull) => {
  const nestedComments = (comment.children || []).map((comment: IComment) => {
    return <Comment key={comment.id} comment={comment} isChildren={true} />
  })
  return (
    <div
      className={
        ' border-l-2 border-cyan-800 w-full' +
        (isChildren ? ' ml-8 comment-child' : '')
      }
    >
      <div className="bg-gradient-to-r from-cyan-800 to-transparent user pl-5 text-indigo-300">
        {comment.user}
      </div>
      <div className="text-pink-200 px-3 py-2">{comment.text}</div>
      {nestedComments}
    </div>
  )
}
