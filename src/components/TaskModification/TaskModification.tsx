import {Input, Modal, Select} from 'antd';
import {useTaskModification} from './useTaskModification.tsx';
import {TASK_STATUS} from '../../constants/userTasks.ts';

const TaskModification = ({open, onCancel, defaultTask}) => {
    const {task, onChangeInput, onClearState} = useTaskModification(defaultTask);

    return (<Modal
        open={open}
        title={defaultTask ? 'Edit Task' : 'Add New Task'}
        onCancel={onCancel}
        okText={defaultTask ? 'edit' : 'Add'}
        destroyOnClose={true}
    >
        <Input placeholder="Task Title ..." value={task?.title}
               onChange={(e) => onChangeInput('title', e.target.value)}/>
        <Select
            placeholder="Status"
            defaultValue={task?.status}
            style={{width: 120, marginTop: 24}}
            onChange={(value) => onChangeInput('status', value)}
            options={[
                {value: TASK_STATUS.TO_DO, label: 'TO_DO'},
                {value: TASK_STATUS.DOING, label: 'DOING'},
                {value: TASK_STATUS.DONE, label: 'DONE'},
            ]}
        />
    </Modal>)
}


export default TaskModification;