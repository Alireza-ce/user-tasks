import {useUserTasks} from './useUserTasks.ts';
import styles from './UserTasks.module.scss';
import TasksCol from '../TasksCol';
import TaskModificationModal from '../TaskModificationModal';
import {Input, Select} from 'antd';

export const UserTasks = () =>{
    const {tasks,userIdOptions, search, onOpenModal, onConfirmTask, onChangeUserSelect,onSearchChange} = useUserTasks();

    return(<div>

        <Input placeholder="Task Title ..." value={search.current}
               onChange={(e) => onSearchChange(e.target.value)}/>

        <Select
            placeholder="User"
            defaultValue={1}
            style={{width: 120, marginTop: 24}}
            onChange={(value) => onChangeUserSelect(value)}
            options={userIdOptions}
        />
        <div onClick={onOpenModal}>create tasks</div>
        <div className={styles.tasksCol}>
            <TasksCol tasks={tasks?.todoTasks} title="To-Do"/>
            <TasksCol tasks={tasks?.doingTasks} title="Doing"/>
            <TasksCol tasks={tasks?.doneTasks} title="Done"/>
        </div>

        <TaskModificationModal onConfirmTask={onConfirmTask}  />
    </div>)
}

export default UserTasks;