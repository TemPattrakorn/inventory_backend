import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Requisition {
	@PrimaryGeneratedColumn()
	req_id: Number;

	@Column()
	user_id: Number;

	@Column({ default: null, nullable: true, type: 'date' })
	completedate: string;

	@Column({ nullable: true })
	description: string;

	@Column({ default: false })
	is_complete: Boolean;

}

