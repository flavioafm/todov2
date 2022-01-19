import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskListState } from "../atom/taskListAtom";
import { currentTodoState } from "../atom/todoAtom";
import Progress from "./Progress"
import Task from "./Task"
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

function TodoCard({todo}) {

    const [donePercent, setDonePercent] = useState(0);

    useEffect(()=>{
        const allTasks = todo.tasks.length;
        const doneTasks = todo.tasks.filter((task) => task.done === true);
        setDonePercent((doneTasks.length*100)/allTasks);
    }, [todo])

    return (
        <Link key={todo._id} href={'/todo/[id]'} as={`/todo/${todo._id}`}>
            <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col w-full ml-5 mt-5 mr-5 sm:w-80 sm:mr-0 
                    shadow-xl shadow-gray-600/30 cursor-pointer rounded-lg"
            >
                <div 
                    className="
                        relative
                        h-[128px] 
                        rounded-t-lg 
                        bg-[url(https://theplanetapp.com/wp-content/uploads/2020/09/sustainable-supermarket-theplanetapp-scaled.jpg)]
                        bg-cover
                        bg-center"
                >   
                    <div className="absolute h-full rounded-t-lg w-full top-0 left-0 backdrop-blur-sm bg-white/5"></div>    
                    <div className="flex justify-between h-full pl-5 pr-5 pb-3">
                        <p className="self-end text-3xl font-bold text-white opacity-70 truncate ...">{todo.title}</p>
                        <div className="self-end z-10"><Progress value={donePercent} color={'#16C3B0'} /></div>
                    </div>
                </div>
                <div className="relative bg-special_gray-body_card h-[200px] rounded-b-lg pt-4 overflow-hidden">
                    {todo.tasks.map((task) => {
                        return (
                            <Task key={task._id} task={task} />
                        )
                    })}
                    <div className="absolute h-full rounded-b-lg w-full bg-gradient-to-t from-special_gray-body_card top-0 left-0"></div>
                </div>
            </motion.div>
        </Link>
    )
}

export default TodoCard

