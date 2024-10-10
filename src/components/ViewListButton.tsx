import { faList } from "@fortawesome/free-solid-svg-icons"
import ActionButton from "./ActionButton"

function ViewListButton () {
    return (
        <ActionButton
            title="View list"
            tooltipId="view-list"
            tooltip="View the list with all of the comments"
            faIcon={faList}
        />
    )
}

export default ViewListButton