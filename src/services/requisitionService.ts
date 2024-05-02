import { AppDataSource } from '../data-source';
import { Requisition } from '../entities/Requisition';

export class RequisitionService {
	private requisitionRepository = AppDataSource.getRepository(Requisition);

	async getAllRequisitions(): Promise<Requisition[]> {
		return await this.requisitionRepository.find();
	}

	async getRequisitionById(id: Number): Promise<Requisition | undefined> {
		return await this.requisitionRepository.findOneBy({ req_id: id });
	}

	async createRequisition(requisitionData: Requisition): Promise<Requisition> {
		const newRequisition = this.requisitionRepository.create(requisitionData);
		return await this.requisitionRepository.save(newRequisition);
	}

	async updateRequisition(id: Number, requisitionData: Requisition): Promise<Requisition | null> {
		const existingRequisition = await this.requisitionRepository.findOneBy({ req_id: id });
		if (!existingRequisition) return null;

		const updatedRequisition = await this.requisitionRepository.save({
			...existingRequisition,
			...requisitionData,
		});
		return updatedRequisition;
	}

	async deleteRequisition(req_id: number): Promise<boolean> {
		const deleteResult = await this.requisitionRepository.delete(req_id);
		return !!deleteResult.affected;
	}
}
