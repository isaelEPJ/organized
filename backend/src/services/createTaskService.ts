import { getRepository } from 'typeorm';
import Task from '../model/tasks';

interface Require {
    title: string;
    content: string;
    user_id: string;
    flag: string;
}
class CreateTaskService {
    public async Execute({
        title,
        content,
        user_id,
        flag,
    }: Require): Promise<Task> {
        const taskRepository = getRepository(Task);

        //throw new Error('this task is already booked');

        const task = taskRepository.create({
            title,
            content,
            user_id,
            flag,
        });
        await taskRepository.save(task);
        return task;
    }
}
export default CreateTaskService;
