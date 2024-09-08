import {createContext, useState} from 'react';

export const TaskModalContext = createContext({
    openModal: false,
    task: null,
    onOpenModal: () => {},
    onCloseModal: () => {},
    onTaskChange: (task) => {}
});

export const TaskModalProvider = ({children}) => {
    const [openModal, setOpenModal] = useState(false);
    const [task, setTask] = useState(null)

    const onOpenModal = () => {
        setOpenModal(true)
    };

    const onCloseModal = () => {
        setOpenModal(false)
    }

    const onTaskChange = (task) => {
        setTask(task)
    }

    return (
        <TaskModalContext.Provider value={{openModal, task, onOpenModal, onCloseModal, onTaskChange}}>
            {children}
        </TaskModalContext.Provider>
    );
};