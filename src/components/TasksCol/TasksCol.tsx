import TaskCard from '../TaskCard';
import styles from './TasksCol.module.scss';
const TasksCol = ({title, tasks}) => {
    return (<div className={styles.taskCol}>
        <h3>
            {title}
        </h3>
        {tasks?.map(task => (
            <TaskCard key={task.id} task={task}/>
        ))}
    </div>)
}

export default TasksCol