import { Request, Response } from 'express';
import { InventoryService } from '../services/inventoryService';
import { Inventory } from '../entities/Inventory';

const inventoryService = new InventoryService();

export const getAllInventories = async (req: Request, res: Response) => {
	const inventories = await inventoryService.getAllInventories();
	res.send({ success: true, data: inventories })
};

export const getInventoryById = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const inventory = await inventoryService.getInventoryById(id);
	if (inventory) {
		res.send({ success: true, data: inventory });
	} else {
		res.status(404).json({ success: false });
	}
};

export const createInventory = async (req: Request, res: Response) => {
	const inventoryData: Inventory = req.body;
	const newInventory = await inventoryService.createInventory(inventoryData);
	res.status(201).send({ success: true, data: newInventory });
};

export const updateInventory = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const inventoryData: Inventory = req.body;
	const updatedInventory = await inventoryService.updateInventory(id, inventoryData);
	if (updatedInventory) {
		res.send({ success: true, data: updatedInventory });
	} else {
		res.status(404).json({ success: false });
	}
};

export const deleteInventory = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const success = await inventoryService.deleteInventory(id);
	if (success) {
		res.send({ success: true });
	} else {
		res.status(404).send({ success: false });
	}
};
