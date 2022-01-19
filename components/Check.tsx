import { CheckCircleIcon } from "@heroicons/react/outline"

function Check({selected = false, color=""}) {

    if (selected) {
        return (
            <button className="space-x-2 text-cyan">
                <CheckCircleIcon className="w-8 h-8"/>
            </button>
        )
    }

    return (
        <div className="w-[28px] h-[28px] border-[3px] border-cyan rounded-full m-0.5"></div>
    )
}

export default Check
