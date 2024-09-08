import {useState} from 'react';

export const useTaskModification = (defaultTask) => {
    const [task, setTask] = useState(defaultTask);

    const onChangeInput = (name, value) => {
        setTask(prev => ({...prev, [name]: value}));
    }

    const onClearState = () => {
        setTask({})
    }

    return {
        task,
        onChangeInput,
        onClearState
    }
}