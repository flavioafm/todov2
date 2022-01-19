import { useRecoilValue } from "recoil"
import { todoListState } from "../atom/todoListAtom"
import TodoCard from "./TodoCard"
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Center() {

    const todos = useRecoilValue(todoListState);
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide pr-5">
                <motion.div variants={stagger} className="flex flex-row text-gray-500 flex-wrap justify-items-start" >
                    {todos && todos.map((todo) => (
                        <TodoCard key={todo._id} todo={todo}/>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Center

