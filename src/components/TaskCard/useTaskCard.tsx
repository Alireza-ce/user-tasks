import {useState} from 'react';

export const useTaskCard = () =>{
    const [openEditTask,setOpenEditTask] = useState(false);

    return{
        openEditTask,
        setOpenEditTask
    }
}