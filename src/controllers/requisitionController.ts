import { Request, Response } from 'express';
import { RequisitionService } from '../services/requisitionService';
import { Requisition } from '../entities/Requisition';

const requisitionService = new RequisitionService();

export const getAllRequisitions = async (req: Request, res: Response) => {
	const filters = req.query;
	const requisitions = await requisitionService.getAllRequisitions(filters);
	res.send({ success: true, data: requisitions })
};

export const getRequisitionById = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const requisition = await requisitionService.getRequisitionById(id);
	if (requisition) {
		res.send({ success: true, data: requisition });
	} else {
		res.status(404).json({ success: false });
	}
};

export const createRequisition = async (req: Request, res: Response) => {
	const requisitionData: Requisition = req.body;
	const newrequisition = await requisitionService.createRequisition(requisitionData);
	res.status(201).send({ success: true, data: newrequisition });
};

export const updateRequisition = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const requisitionData: Requisition = req.body;
	const updatedRequisition = await requisitionService.updateRequisition(id, requisitionData);
	if (updatedRequisition) {
		res.send({ success: true, data: updatedRequisition });
	} else {
		res.status(404).json({ success: false });
	}
};

export const deleteRequisition = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const success = await requisitionService.deleteRequisition(id);
	if (success) {
		res.send({ success: true });
	} else {
		res.status(404).send({ success: false });
	}
};
