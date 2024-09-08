import {useFetch} from '../../api/useFetch.ts';
import {getUserTasksUrl} from '../../api/urls.ts';
import {useContext, useEffect, useState} from 'react';
import {TASK_STATUS} from '../../constants/userTasks.ts';
import {TaskModalContext} from '../../contexts/TaskModalContext.tsx';

export const useUserTasks = () =>{
    const {data, isLoading, error, isSuccess} = useFetch(getUserTasksUrl);
    const {onOpenModal} = useContext(TaskModalContext)
    const [userTasks, setUserTasks]  = useState();

    const initUserTasks = () =>{
        data.map(task => task.status = task?.completed ? TASK_STATUS.DONE : TASK_STATUS.TO_DO);
        setUserTasks(data);
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
        onOpenModal
    }
}