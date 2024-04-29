import { AppDataSource } from '../data-source';
import { Inventory } from '../entities/Inventory';

export class InventoryService {
	private inventoryRepository = AppDataSource.getRepository(Inventory);

	async getAllInventory(): Promise<Inventory[]> {
		return await this.inventoryRepository.find();
	}

	async getInventoryById(id: string): Promise<Inventory | undefined> {
		return await this.inventoryRepository.findOneBy({ id: id });
	}

	async createInventory(inventoryData: Inventory): Promise<Inventory> {
		const newInventory = this.inventoryRepository.create(inventoryData);
		return await this.inventoryRepository.save(newInventory);
	}

	async updateInventory(id: string, inventoryData: Inventory): Promise<Inventory | null> {
		const existingInventory = await this.inventoryRepository.findOneBy({ id: id });
		if (!existingInventory) return null;

		const updatedInventory = await this.inventoryRepository.save({
			...existingInventory,
			...inventoryData,
		});
		return updatedInventory;
	}

	async deleteInventory(id: string): Promise<boolean> {
		const deleteResult = await this.inventoryRepository.delete(id);
		return !!deleteResult.affected;
	}
}
