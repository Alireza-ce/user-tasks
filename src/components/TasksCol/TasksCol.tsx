import TaskCard from '../TaskCard';
import styles from './TasksCol.module.scss';
import {Task} from '../../types';

type TasksColProps = {
    title: string,
    tasks: Array<Task> | undefined
}
const TasksCol = ({title, tasks}: TasksColProps) => {
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