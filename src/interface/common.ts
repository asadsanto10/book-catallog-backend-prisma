export interface IGenericResponse<T> {
	data: T;
	meta: {
		page: number;
		size: number;
		total: number;
		totalPage?: number;
	};
}
