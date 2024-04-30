import { AppDataSource } from '../data-source';
import { Inventory } from '../entities/Inventory';

export class InventoryService {
	private inventoryRepository = AppDataSource.getRepository(Inventory);

	async getAllInventories(): Promise<Inventory[]> {
		return await this.inventoryRepository.find();
	}

	async getInventoryById(id: Number): Promise<Inventory | undefined> {
		return await this.inventoryRepository.findOneBy({ id: id });
	}

	async createInventory(inventoryData: Inventory): Promise<Inventory> {
		const newInventory = this.inventoryRepository.create(inventoryData);
		return await this.inventoryRepository.save(newInventory);
	}

	async updateInventory(id: Number, inventoryData: Inventory): Promise<Inventory | null> {
		const existingInventory = await this.inventoryRepository.findOneBy({ id: id });
		if (!existingInventory) return null;

		const updatedInventory = await this.inventoryRepository.save({
			...existingInventory,
			...inventoryData,
		});
		return updatedInventory;
	}

	async deleteInventory(id: number): Promise<boolean> {
		const deleteResult = await this.inventoryRepository.delete(id);
		return !!deleteResult.affected;
	}
}
