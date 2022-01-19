import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atom/todoListAtom';
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'
import Todo from '../models/Todo';
import { AnimatePresence } from "framer-motion";


export default function Home({todos}) {

  const setTodoList = useSetRecoilState(todoListState);

  useEffect(() => {
    setTodoList(todos);
  }, [todos])


  return (
    <div className="bg-special_gray-center h-screen overflow-hidden">
      <Head>
        <title>TodoV2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar/>
        <AnimatePresence exitBeforeEnter>
          <Center/>
        </AnimatePresence>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const todos = await Todo.find({user: session.user['id']}).populate('tasks');
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };

  // Todo.find({user: session.user['id']}).populate('tasks')
  //   .then(data => {
  //     return {
  //       props: {
  //         todos: JSON.parse(JSON.stringify(data)),
  //       },
  //     };
  //   });

  // return {
  //   props: {
  //     todos: []
  //   }
  // }
}