import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { currentTodoState } from "../../atom/todoAtom"
import Detail from "../../components/Detail"
import Sidebar from "../../components/Sidebar"
import axios from "axios";
import { motion } from "framer-motion";

function Todo() {

    const router = useRouter()
    const { id } = router.query
    const setCurrentTodo = useSetRecoilState(currentTodoState)
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        if (id) {
            axios.get(`/api/todo/${id}`)
                .then(res => {
                    setCurrentTodo(res.data.data);
                    setLoaded(true);
                })
        }
    }, [id])

    return (
        <div className="bg-special_gray-center h-screen overflow-hidden">
            <Head>
                <title>TodoV2</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex">
                <Sidebar/>
                { loaded &&  <Detail/> }
            </main>
        </div>
    )
}

export default Todo
