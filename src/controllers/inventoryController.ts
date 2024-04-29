import { Request, Response } from 'express';
import { InventoryService } from '../services/inventoryService';
import { Inventory } from '../entities/Inventory';

const inventoryService = new InventoryService();

export const getAllInventory = async (req: Request, res: Response) => {
	const inventory = await inventoryService.getAllInventory();
	res.json(inventory);
};

export const getInventoryById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const inventory = await inventoryService.getInventoryById(id);
	if (inventory) {
		res.json(inventory);
	} else {
		res.status(404).json({ message: 'Inventory not found' });
	}
};

export const createInventory = async (req: Request, res: Response) => {
	const inventoryData: Inventory = req.body;
	const newInventory = await inventoryService.createInventory(inventoryData);
	res.status(201).json(newInventory);
};

export const updateInventory = async (req: Request, res: Response) => {
	const { id } = req.params;
	const inventoryData: Inventory = req.body;
	const updatedInventory = await inventoryService.updateInventory(id, inventoryData);
	if (updatedInventory) {
		res.json(updatedInventory);
	} else {
		res.status(404).json({ message: 'Inventory not found' });
	}
};

export const deleteInventory = async (req: Request, res: Response) => {
	const { id } = req.params;
	const success = await inventoryService.deleteInventory(id);
	if (success) {
		res.json({ message: 'Inventory deleted successfully' });
	} else {
		res.status(404).json({ message: 'Inventory not found' });
	}
};
