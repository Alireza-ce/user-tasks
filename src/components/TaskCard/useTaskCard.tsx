import {useContext} from 'react';
import {TaskModalContext} from '../../contexts/TaskModalContext.tsx';

export const useTaskCard = () =>{
    const {onOpenModal, onTaskChange} = useContext(TaskModalContext)

    const onClickTaskCard = (task) => {
        onTaskChange(task);
        onOpenModal()
    }
    return{
        onClickTaskCard
    }
}