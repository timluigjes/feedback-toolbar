import { faComment } from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ActionButton"
import getXPath from "get-xpath";
import { useDispatch } from 'react-redux';
import CommentListItemProps from "../interfaces/CommentListItemProps";
import { addComment, addListItem } from "../store/store";

function AddCommentButton() {
    const dispatch = useDispatch();

    function selectComment() {
        document.addEventListener('mouseover', addHover);

        document.addEventListener('mouseout', removeHover);

        document.addEventListener('click', setSelected);

    }

    const setSelected = (event: MouseEvent) => {
        event.preventDefault();
        const element = event.target as HTMLElement;
        const selected = element.classList.contains('ft-element-select');
        if (element && selected) {
            element.classList.remove('ft-element-select');
            element.classList.add('ft-element-selected');
            document.removeEventListener('click', setSelected);
            document.removeEventListener('mouseover', addHover);
            document.removeEventListener('mouseout', removeHover);

            addCommentComp(event)
        }
    }

    const removeHover = (event: MouseEvent) => {
        (event.target as HTMLElement).classList.remove('ft-element-select');
    }

    const addHover = (event: MouseEvent) => {
        (event.target as HTMLElement).classList.add('ft-element-select');
    }

    function addCommentComp(e: MouseEvent) {
        const listItem: CommentListItemProps = {
            x: e.offsetX,
            y: e.offsetY,
            path: getXPath(e.target as HTMLElement),
            user: 'user',
            comment: `
            Dit een comment die over meerdere regels gebruikt kan worden.
            Wordt dit ook verwerkt door de Markdown component? 
            `
        }

        //Add commment to the store
        dispatch(addComment(listItem));
        dispatch(addListItem(listItem))


    }

    return (
        <ActionButton title="Add comment" tooltipId="action-button" tooltip="Adds a comment" faIcon={faComment} func={selectComment} />
    )
}

export default AddCommentButton