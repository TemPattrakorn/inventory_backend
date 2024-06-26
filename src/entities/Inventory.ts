import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
	@PrimaryGeneratedColumn()
	id: Number;

	@Column()
	name: string;

	@Column({ nullable: true })
	description: string;

	@Column()
	stockqnt: Number;

	@Column()
	minqnt: Number;

	@Column()
	unit: string;

	@Column({ nullable: true })
	catagory: string;

	@Column({ nullable: true })
	imgpath: string;


}

