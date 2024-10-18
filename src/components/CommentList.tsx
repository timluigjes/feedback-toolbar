import CommentListItemProps from "../interfaces/CommentListItemProps"
import {useEffect, useState} from "react";
import Markdown from "react-markdown";

interface CommentButtonProps {
    comment: CommentListItemProps
}

interface commentListItem {
    user: string,
    comment: string,
    id: string
}

function CommentList({comment}: CommentButtonProps) {
    const [commentList, setCommentList] = useState<commentListItem[]>([]);
    const crypto = new Crypto();

    useEffect(() => {
        if (comment && comment.user && comment.comment) {
            setCommentList(commentList => [...commentList, {
                user: comment.user!,
                comment: comment.comment!,
                id: crypto.randomUUID()
            }]);
        }

    }, [])


    return (
        <>
            <div className="comment-list">
                {commentList.map(comment => (
                    <div className="comment" key={comment.id}>
                        <span>{comment.user}</span>
                        <div className="text-comment">
                            <Markdown>{comment.comment}</Markdown>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CommentList