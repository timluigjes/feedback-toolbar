import {faComment} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function CommentButton() {
    return (
        <div className="comment-button">
            <FontAwesomeIcon icon={faComment}/>

        </div>
    )
}

export default CommentButton