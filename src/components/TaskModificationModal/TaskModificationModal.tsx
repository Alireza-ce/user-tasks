import {Input, Modal, Select} from 'antd';
import {useTaskModificationModal} from './useTaskModificationModal.tsx';
import {TASK_STATUS} from '../../constants/userTasks.ts';

const TaskModificationModal = ({onConfirmTask}) => {
    const {task, onChangeInput, openModal, onCancel} = useTaskModificationModal();

    return (<Modal
        open={openModal}
        title={task?.id ? 'Edit Task' : 'Add New Task'}
        onCancel={onCancel}
        okText={task?.id ? 'Edit' : 'Add'}
        onOk={() => {
            onConfirmTask(task);
            onCancel();
        }}
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


export default TaskModificationModal;