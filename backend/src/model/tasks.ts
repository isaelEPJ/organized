import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import User from './users';

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    content: string;
    @Column()
    user_id: string;
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
    @Column()
    flag: string;
    @Column('timestamp with time zone')
    created_at: Date;
    @Column('timestamp with time zone')
    altered_at: Date;
}
export default Task;
