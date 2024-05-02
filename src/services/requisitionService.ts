import { AppDataSource } from '../data-source';
import { Requisition } from '../entities/Requisition';

export class RequisitionService {
	private requisitionRepository = AppDataSource.getRepository(Requisition);

	async getAllRequisitions(filters: Record<string, any>): Promise<Requisition[]> {

		let query = this.requisitionRepository.createQueryBuilder('requisition');
		if (filters.user_id) {
			query = query.andWhere('requisition.user_id = :user_id', { user_id: Number(filters.user_id) });
		}
		if (filters.completedate) {
			query = query.andWhere('requisition.completedate = :completedate', { completedate: filters.completedate });
		}
		if (filters.is_complete) {
			query = query.andWhere('requisition.is_complete = :is_complete', { is_complete: ((filters.is_complete === 'true') ? true : false) });
		}
		if (filters.orderby_field) {
			query = query.orderBy(`requisition.${filters.orderby_field}`, 'ASC')
		}

		return await query.getMany();
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
