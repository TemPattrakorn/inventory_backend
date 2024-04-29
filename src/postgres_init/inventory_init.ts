// createInventoryData.ts
import { AppDataSource } from '../data-source';
import { Inventory } from '../entities/Inventory';

const createInventoryData = async () => {
	const inventoryRepository = AppDataSource.getRepository(Inventory);
	const inventoryData1 = {
		name: "name1",
		description: "description1",
		stockqnt: 12,
		minqnt: 10,
		unit: "unit1",
		catagory: "catagory1",
		imgpath: "imgpath1"
	}

	const inventoryData2 = {
		name: "name2",
		description: "description2",
		stockqnt: 5432,
		minqnt: 64,
		unit: "unit2",
		catagory: "catagory2",
		imgpath: "imgpath2"
	}
	try {

		const inventory1 = inventoryRepository.create(inventoryData1);
		const inventory2 = inventoryRepository.create(inventoryData2);
		await inventoryRepository.save(inventory1);
		await inventoryRepository.save(inventory2);

		console.log('Inventory placeholder data inserted successfully');
	} catch (error) {
		console.error('Error inserting placeholder data:', error);
	}
};

export { createInventoryData };
