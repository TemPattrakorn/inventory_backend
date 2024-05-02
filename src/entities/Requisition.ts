import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Requisition {
	@PrimaryGeneratedColumn()
	req_id: Number;

	@Column()
	user_id: Number;

	@Column({ type: 'timestamptz' })
	completedate: Date;

	@Column()
	description: string;

	@Column()
	is_complete: Boolean;

}

