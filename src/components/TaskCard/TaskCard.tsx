import styles from './TaskCard.module.scss';

const TaskCard = ({task}) => {
    return(<div className={styles.taskCard}>
        <p>Title: {task.title}</p>
        <p>User ID: {task.userId}</p>
    </div>)
}

export default TaskCard;