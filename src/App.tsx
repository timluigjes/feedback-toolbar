import './App.css'
import ActionButton from './components/ActionButton'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import AddCommentButton from './components/AddCommentButton'
import ViewListButton from './components/ViewListButton'
import type { RootState } from './store/store'
import { useSelector } from 'react-redux'
import CommentButton from './components/CommentButton'
import CommentListItemProps from './interfaces/CommentListItemProps'
import CommentList from './components/CommentList'

function App() {
  const listItems = useSelector((state: RootState) => state.listItems)

  const getPos = (pos: 'x' | 'y', value: number, path: string) => {
    const elem = (document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement);
    console.log(elem);
    if(elem === null) {
      console.error("Element not found with xpath: " + path);
      return -1000;
    }

    switch(pos) {
      case 'x':
        return elem.offsetLeft + value;
      case 'y':
        return elem.offsetTop + value;
    }

  };

  const listItemsComps = listItems.map((listItem: CommentListItemProps) => {
    return (
      <div
        key={listItem.path}
        className="comment-container"
        style={{
          top: getPos('y', listItem.y, listItem.path),
          left: getPos('x', listItem.x, listItem.path)
        }}
      >
        <CommentButton />
        <CommentList comment={listItem}/>
      </div>
    )
  })

  return (
    <>
      <div className="comments-list">
        {listItemsComps}
      </div>
      <div className="toolbar">
        <AddCommentButton />
        <ViewListButton />
        <ActionButton title="Settings" faIcon={faGear} />
      </div>
    </>
  )
}

export default App
