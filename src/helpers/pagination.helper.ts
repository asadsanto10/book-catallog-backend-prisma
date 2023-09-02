import { IPageOtions } from '../interface/pagination';

interface IPageOptionsReturn extends Partial<IPageOtions> {
	skip?: number;
}

const calculatePagination = (
	pageOptions: Partial<IPageOtions>,
	total: number
): IPageOptionsReturn => {
	const page = Number(pageOptions.page || 1);
	const size = Number(pageOptions.size || 10);
	const skip = (page - 1) * size;
	const totalPage = Math.ceil(total / size);

	const sortBy = pageOptions.sortBy || 'createdAt';
	const sortOrder = pageOptions.sortOrder || 'desc';
	return {
		page,
		size,
		skip,
		sortBy,
		sortOrder,
		totalPage,
	};
};

export default calculatePagination;
