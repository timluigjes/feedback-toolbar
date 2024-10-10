import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "react-tooltip"

interface ActionButtonProps {
    title: string
    tooltipId?: string
    tooltip?: string
    func?: () => void
    faIcon?: IconProp
}



/**
 * A button component with a tooltip.
 *
 * @param title The title of the button.
 * @param tooltipId The id of the tooltip.
 * @param tooltip The tooltip content.
 * @param func The function to call when the button is clicked.
 * @param faIcon The fontawesome icon to display.
 * @returns A button with a tooltip.
 */
function ActionButton({ title, tooltipId, tooltip, func, faIcon }: ActionButtonProps) {
    return (
        <>
            <button
                data-tooltip-id={tooltipId}
                data-tooltip-content={tooltip}
                data-tooltip-place="top"
                onClick={func}
            >
                {faIcon && <FontAwesomeIcon icon={faIcon} />}
                <span>{title}</span>
            </button>
            <Tooltip id={tooltipId} />
        </>
    )
}

export default ActionButton