import React from "react";


export const Comment = (props: any) => {

    return (
        <div>
            {/* <div>{item.id}</div> */}
            { props.comment.id}
            { props.comment.user}
            { props.comment.text}
        </div>
    )
}