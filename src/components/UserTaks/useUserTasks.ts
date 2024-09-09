import {useContext, useEffect, useMemo, useState, useRef, useId} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useFetch} from '../../api/useFetch.ts';
import {getUserTasksUrl} from '../../api/urls.ts';
import {TASK_STATUS} from '../../constants/userTasks.ts';
import {TaskModalContext} from '../../contexts/TaskModalContext.tsx';

export const useUserTasks = () =>{
    const {onOpenModal} = useContext(TaskModalContext);
    const [userIdOptions, setUserIdOptions] = useState([]);
    const selectedUser = useRef(1);
    const [usersTasks, setUsersTasks] = useState([]);
    const [specificUserTasks, setSpecificUserTasks] = useState([])

    const {data, isLoading, error, isSuccess} = useFetch(getUserTasksUrl);

    const tasks = useMemo(() => {
        let todoTasks = [];
        let doingTasks = [];
        let doneTasks = [];

        specificUserTasks.forEach(task => {
            if (task.status === TASK_STATUS.DONE) doneTasks.push(task)
            else if (task.status === TASK_STATUS.TO_DO) todoTasks.push(task)
            else doingTasks.push(task)
        })
        return {doneTasks, doingTasks, todoTasks};
    }, [specificUserTasks])

    const initUserTasks = (search = '') => {
        const specificUserTasks = usersTasks.filter(task => task.userId === selectedUser.current && task?.title?.includes(search));
        setSpecificUserTasks(specificUserTasks);
    }

    const initUserIdOptions = () => {
        const userIds = usersTasks.map(item => item.userId);
        const setOfUserIds = Array.from(new Set(userIds))
        const userIdOptions = setOfUserIds?.map(userId => ({value: userId, label: userId}))
        setUserIdOptions(userIdOptions);
    }

    const onChangeUserSelect = (userId) => {
        selectedUser.current = userId;
        initUserTasks()
    }

    const onSearchChange = (search) =>{
        initUserTasks(search);
    }

    const onUpdateTask = (task)=>{
        setUsersTasks(prev =>
            prev.map(item =>
                item.id === task.id ? { ...item, ...task } : item
            )
        );
    }

    const onCreateTask = (task)=>{
        setUsersTasks(prev => [...prev, {...task, userId: selectedUser.current, id: uuidv4()}])
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
            const dataDTO = data.map(task => ({ ...task, status: task?.completed ? TASK_STATUS.DONE : TASK_STATUS.TO_DO}))
            setUsersTasks(dataDTO);
        }
    }, [isSuccess]);

    useEffect(() => {
        if(userIdOptions.length === 0){
            initUserIdOptions();
        }

        if(usersTasks.length > 1){
            initUserTasks();
        }

    }, [usersTasks]);

    return{
        tasks,
        userIdOptions,
        isLoading,
        error,
        onOpenModal,
        onConfirmTask,
        onChangeUserSelect,
        onSearchChange
    }
}