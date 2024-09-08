import {useUserTasks} from './useUserTasks.ts';
import styles from './UserTasks.module.scss';
import TasksCol from '../TasksCol';
import {useMemo} from 'react';
import {TASK_STATUS} from '../../constants/userTasks.ts';
import TaskModification from '../TaskModification';

export const UserTasks = () =>{
    const {userTasks, onOpenModal} = useUserTasks();

    const todoTasks = useMemo(()=> userTasks?.filter(task => task.status === TASK_STATUS.TO_DO),[userTasks])
    const doingTasks = useMemo(()=> userTasks?.filter(task => task.status === TASK_STATUS.DOING),[userTasks])
    const doneTasks = useMemo(()=> userTasks?.filter(task => task.status === TASK_STATUS.DONE),[userTasks])

    return(<div>
{/*search component */}
{/*        create tasks*/}
{/*        user table*/}

        <div onClick={onOpenModal}>create tasks</div>
        <div className={styles.tasksCol}>
            <TasksCol tasks={todoTasks} title='To-Do' />
            <TasksCol tasks={doingTasks} title='Doing' />
            <TasksCol tasks={doneTasks} title='Done' />
        </div>

        <TaskModification />
    </div>)
}

export default UserTasks;