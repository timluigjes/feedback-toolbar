import './App.css'
import ActionButton from './components/ActionButton'
import {faFileExport} from '@fortawesome/free-solid-svg-icons'
import AddCommentButton from './components/AddCommentButton'
import ViewListButton from './components/ViewListButton'
import type {RootState} from './store/store'
import {useSelector} from 'react-redux'
import CommentButton from './components/CommentButton'
import CommentButtonProps from "./interfaces/CommentButtonProps.ts";

function App() {
    const commentButtons = useSelector((state: RootState) => state.comments)

    const getPos = (pos: 'x' | 'y', value: number, path: string) => {
        const elem = (document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement);
        // console.log(elem.getBoundingClientRect());
        // debugger;
        if (elem === null) {
            console.error("Element not found with xpath: " + path);
            return -1000;
        }

        switch (pos) {
            case 'x':
                return elem.getBoundingClientRect().x + value;
            case 'y':
                return elem.getBoundingClientRect().y + value;
        }

    };


    const listCommentButtons = commentButtons.map((commentButton: CommentButtonProps) => {
        return (
            <div
                key={commentButton.path}
                className="comment-button-container"
                style={{
                    top: getPos('y', commentButton.y, commentButton.path),
                    left: getPos('x', commentButton.x, commentButton.path),
                }}>
                <CommentButton/>
            </div>
        )
    });

    const exportComments = () => {
    };

    return (
        <>
            <div id="comment-map">
                {listCommentButtons}
            </div>
            <div className="toolbar">
                <AddCommentButton/>
                <ViewListButton/>
                <ActionButton title="Export" faIcon={faFileExport} func={exportComments}/>
            </div>
        </>
    )
}

export default App
