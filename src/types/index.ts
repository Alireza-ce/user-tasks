import {TASK_STATUS} from '../constants/userTasks.ts';

export type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    status: typeof TASK_STATUS
}