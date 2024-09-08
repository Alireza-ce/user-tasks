import styles from './TaskCard.module.scss';
import TaskModification from '../TaskModification';
import {useTaskCard} from './useTaskCard.tsx'

const TaskCard = ({task}) => {
    const {onClickTaskCard} = useTaskCard()
    return (<>
        <div className={styles.taskCard} onClick={()=>{onClickTaskCard(task)}}>
        <p>Title: {task.title}</p>
        <p>User ID: {task.userId}</p>
    </div>
    </>)
}

export default TaskCard;