import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class createRelationshipUserandTask1602757580364
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                name: 'taskUserId',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tasks', 'taskUserId');
    }
}
