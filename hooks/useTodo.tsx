import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { taskListState } from "../atom/taskListAtom";
import { currentTodoState } from "../atom/todoAtom";
import { todoListState } from "../atom/todoListAtom";

interface Task {
    title: string,
    done: boolean,
    finishedAt: Date
}

interface Todo {
    title: string,
    tasks: [Task]
}

function useTodo() {

    const todoList = useRecoilValue(todoListState)
    const taskList = useRecoilValue(taskListState);
    const [currentTodo, setCurrentTodo] = useRecoilState<Todo>(currentTodoState);


    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentTodo) {
                // const trackInfo = await fetch(
                //     `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                //     {
                //         headers: {
                //             Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                //         }
                //     }
                // ).then( res => res.json());
                // setSongInfo(trackInfo);
            }
        }

        fetchSongInfo();
    }, [currentTodo])

    return currentTodo;
}

export default useTodo
