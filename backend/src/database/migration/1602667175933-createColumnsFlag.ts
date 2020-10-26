import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class createColumnsFlag1602667175933 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'tasks',
            new TableColumn({
                name: 'flag',
                type: 'varchar',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('tasks', 'flag');
    }
}
