import {faComment} from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ActionButton"
import getXPath from "get-xpath";
import {useDispatch} from 'react-redux';
import CommentListItemProps from "../interfaces/CommentListItemProps";
import {addComment} from "../store/store";

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
        const ele = (event.target as HTMLElement);
        if (canSelect(ele)) {
            ele.classList.add('ft-element-select');
        } else {
            console.log('nope');
        }
    }

    const canSelect = (ele: HTMLElement) => {
        let parent = ele.parentNode;

        while (parent) {
            if ((parent as HTMLElement).id === 'root') {
                return false;
            }

            parent = parent.parentNode;
        }

        return true
    };

    /**
     * Remove the option to add comments when the Escape key is pressed.
     */
    document.addEventListener('keyup', function (e: KeyboardEvent) {
        //If key is escape
        if (e.key === 'Escape' || e.key === 'Esc') {
            document.removeEventListener('click', setSelected);
            document.removeEventListener('mouseover', addHover);
            document.removeEventListener('mouseout', removeHover);
            const selectClassEle = document.querySelector('.ft-element-select')
            if (selectClassEle !== null) {
                selectClassEle.classList.remove('ft-element-select');
            }
        }
    });

    function addCommentComp(e: MouseEvent) {
        const listItem: CommentListItemProps = {
            path: getXPath(e.target as HTMLElement),
            user: 'user',
            comment: '',
            number: 1
        }

        //Add comment to the store
        dispatch(addComment(listItem));
        // dispatch(addListItem(listItem))


    }

    return (
        <ActionButton title="Add comment" tooltipId="action-button" tooltip="Adds a comment" faIcon={faComment}
                      func={selectComment}/>
    )
}

export default AddCommentButton