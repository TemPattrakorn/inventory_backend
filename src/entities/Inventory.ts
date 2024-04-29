import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	stockqnt: Number;

	@Column()
	minqnt: Number;

	@Column()
	unit: string;

	@Column()
	catagory: string;

	@Column()
	imgpath: string;


}
