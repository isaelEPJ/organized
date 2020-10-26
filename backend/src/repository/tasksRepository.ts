// import { EntityRepository, Repository } from 'typeorm';
// import Task from '../model/tasks';

// @EntityRepository(Task)
// class tasksRepository extends Repository<Task> {
//     public async findByDate(date: Date): Promise<Task | null> {
//         const taskDate = await this.findOne({
//             where: { date },
//         });
//         return taskDate || null;
//     }
// }
// export default tasksRepository;
