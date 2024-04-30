import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Request, Response } from 'express';
@Entity()
export class Inventory {
	@PrimaryGeneratedColumn()
	id: Number;

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

