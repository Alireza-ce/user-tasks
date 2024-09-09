import styles from './TaskCard.module.scss';
import {useTaskCard} from './useTaskCard.tsx'
import {Task} from '../../types';

type TaskCardProps = {
    task: Task
}
const TaskCard = ({task}: TaskCardProps) => {
    const {onClickTaskCard} = useTaskCard()
    return (<>
        <div className={styles.taskCard} onClick={()=>{onClickTaskCard(task)}}>
        <p>Title: {task.title}</p>
        <p>User ID: {task.userId}</p>
    </div>
    </>)
}

export default TaskCard;