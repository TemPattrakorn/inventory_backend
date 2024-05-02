import { Router } from 'express';
import { createRequisition, deleteRequisition, getAllRequisitions, getRequisitionById, updateRequisition } from '../controllers/requisitionController';
const requisitionRouter = Router({ mergeParams: true });

requisitionRouter.route("/").get(getAllRequisitions).post(createRequisition)
requisitionRouter.route("/:id").put(updateRequisition).delete(deleteRequisition).get(getRequisitionById)



export { requisitionRouter };
