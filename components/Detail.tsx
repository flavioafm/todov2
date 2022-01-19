import { ChevronLeftIcon } from "@heroicons/react/outline"
import { PhotographIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { currentTodoState } from "../atom/todoAtom"
import Task from "./Task"
import { motion } from "framer-motion";

function Detail() {

    const currentTodo = useRecoilValue(currentTodoState);

    console.log("Current Todo:", currentTodo);
    

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-row flex-wrap text-gray-500">
            <div className="flex items-center justify-center bg-special_gray-top_card w-full h-2/5 md:w-1/2 md:h-full">
                {/* <PhotographIcon className="w-60" /> */}
                <div className="w-full h-full
                    bg-[url(https://theplanetapp.com/wp-content/uploads/2020/09/sustainable-supermarket-theplanetapp-scaled.jpg)]
                    bg-cover
                    bg-center"
                ></div>
            </div>
            <div className="flex flex-wrap items-start content-start p-5 md:p-20 w-full h-3/5 md:w-1/2 md:h-full">
                <div className="w-full">
                    <Link href={'/'} as={`/`}>
                        <div className="flex flex-row items-center cursor-pointer">
                            <ChevronLeftIcon className="w-12"/>
                            <p className="text-2xl">Back to list</p>
                        </div>
                    </Link>
                </div>
                <div className="w-full pt-10">
                    <div className="text-3xl pl-4 pb-4 font-bold text-white opacity-70">
                        <p>{currentTodo && currentTodo.title}</p>
                    </div>
                    {currentTodo && currentTodo.tasks.map((task) => {
                        return (
                            <Task key={task._id} task={task} />
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Detail
