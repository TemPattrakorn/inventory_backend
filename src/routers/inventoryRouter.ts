import { createInventory, deleteInventory, getAllInventory, updateInventory } from "../controllers/inventoryController";

import { Router } from 'express';
const inventoryRouter = Router({ mergeParams: true });

inventoryRouter.route("/").get(getAllInventory).post(createInventory)
inventoryRouter.route("/:id").put(updateInventory).delete(deleteInventory)



export { inventoryRouter };
