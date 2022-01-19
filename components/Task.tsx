import Check from "./Check"

function Task({task}) {
    return (
        <div className="h-8 flex justify-between content-start pl-5 pr-5 mt-2 z-10">
            <h1 className="text-[20px] font-semibold text-white opacity-40">{task.title}</h1>
            <Check selected={task.done}/>
        </div>
    )
}

export default Task
