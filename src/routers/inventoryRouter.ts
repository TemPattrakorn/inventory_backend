import { createInventory, deleteInventory, getAllInventories, getInventoryById, updateInventory } from "../controllers/inventoryController";

import { Router } from 'express';
const inventoryRouter = Router({ mergeParams: true });

inventoryRouter.route("/").get(getAllInventories).post(createInventory)
inventoryRouter.route("/:id").put(updateInventory).delete(deleteInventory).get(getInventoryById)



export { inventoryRouter };
