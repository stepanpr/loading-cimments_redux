import React from "react";
import { IComment, ICommentFull } from './CommentsList'
import './style.css'


export const Comment: React.FC<ICommentFull> = ({
    comment,
    isChildren,
  }: ICommentFull) => {
    const nestedComments = (comment.children || []).map((comment: IComment) => {
      return <Comment key={comment.id} comment={comment} isChildren={true} />
    })
    return (
      <div
         className={'comment comment mt-2 content is-small' + (isChildren ? ' comment-child' : '')}
      >
        <div className="user pl-5">{comment.user}</div>
        <div className="text px-3 py-2">{comment.text}</div>
        {nestedComments}
      </div>
    )
  }


  // export const Comment = (props: any) => {

//     return (
//         <div>
//             {/* <div>{item.id}</div> */}
//             { props.comment.id}
//             { props.comment.user}
//             { props.comment.text}
//         </div>
//     );
// }
