import styles from './TaskCard.module.scss';
import TaskModification from '../TaskModification';
import {useTaskCard} from './useTaskCard.tsx'

const TaskCard = ({task}) => {
    const {openEditTask, setOpenEditTask} = useTaskCard()
    return (<>
        <div className={styles.taskCard} onClick={() => {
        setOpenEditTask(true)
       }}>
        <p>Title: {task.title}</p>
        <p>User ID: {task.userId}</p>
    </div>
        <TaskModification open={openEditTask} onCancel={() => setOpenEditTask(false)} defaultTask={task}/>
    </>)
}

export default TaskCard;