import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';
import TasksRoutes from '../../routes/tasks.routes';

export class CreateTasks1602582584292 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tasks',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'content',
                        type: 'varchar',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'altered_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tasks');
    }
}
