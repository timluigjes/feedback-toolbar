import CommentListItemProps from "../interfaces/CommentListItemProps"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Markdown from "react-markdown";

interface CommentButtonProps {
    comment: CommentListItemProps
}

interface commentListItem {
    user: string,
    comment: string,
    id: number
}

function CommentList({ comment }: CommentButtonProps) {
    const [commentList, setCommentList] = useState<commentListItem[]>([]);

    useEffect(() => {
        if (comment && comment.user && comment.comment) {
            setCommentList(commentList => [...commentList, { user: comment.user!, comment: comment.comment!, id: uuidv4() }]);
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