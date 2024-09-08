import {useFetch} from '../../api/useFetch.ts';
import {getUserTasksUrl} from '../../api/urls.ts';
import {useContext, useEffect, useState} from 'react';
import {TASK_STATUS} from '../../constants/userTasks.ts';
import {TaskModalContext} from '../../contexts/TaskModalContext.tsx';

export const useUserTasks = () =>{
    const {onOpenModal} = useContext(TaskModalContext)
    const [userTasks, setUserTasks]  = useState([]);

    const {data, isLoading, error, isSuccess} = useFetch(getUserTasksUrl);

    const initUserTasks = () =>{
        data.map(task => task.status = task?.completed ? TASK_STATUS.DONE : TASK_STATUS.TO_DO);
        setUserTasks(data);
    }

    const onUpdateTask = (task)=>{
        setUserTasks(prev =>
            prev.map(item =>
                item.id === task.id ? { ...item, ...task } : item
            )
        );
    }

    const onCreateTask = (task)=>{
        setUserTasks(prev => [...prev, {...task, id: 950239}])
    }
    const onConfirmTask = (task) => {
        if(task?.id){
            onUpdateTask(task);
        }else{
            onCreateTask(task);
        }
    }

    useEffect(() => {
        if(isSuccess){
            initUserTasks();
        }
    }, [isSuccess]);

    return{
        userTasks,
        isLoading,
        error,
        onOpenModal,
        onConfirmTask
    }
}