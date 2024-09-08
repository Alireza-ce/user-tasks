import {useContext, useEffect, useState} from 'react';
import {TaskModalContext} from '../../contexts/TaskModalContext.tsx';

export const useTaskModificationModal = () => {
    const {openModal, onCloseModal, task: defaultTask} = useContext(TaskModalContext)
    const [task, setTask] = useState(defaultTask);

    useEffect(() => {
        setTask(defaultTask)
    }, [defaultTask])

    const onChangeInput = (name, value) => {
        setTask(prev => ({...prev, [name]: value}));
    }

    const onClearState = () => {
        setTask({})
    }

    const onCancel = () => {
        onClearState();
        onCloseModal()
    }

    return {
        task,
        openModal,
        onCancel,
        onChangeInput,
    }
}