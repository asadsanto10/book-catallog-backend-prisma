import { Book, Prisma } from '@prisma/client';
import calculatePagination from '../../../helpers/pagination.helper';
import { IGenericResponse } from '../../../interface/common';
import { IPageOtions } from '../../../interface/pagination';
import prisma from '../../../shared/prisma';
import { IBookFilterRequest } from './book.interface';
import { bookSearchableFields } from './book.variable';

const createBook = async (data: Book): Promise<Book> => {
	const result = await prisma.book.create({
		data,
		include: {
			category: true,
		},
	});

	return result;
};

const getAllBooks = async (
	filters: IBookFilterRequest,
	pageOptions: IPageOtions
): Promise<IGenericResponse<Book[]>> => {
	const { minPrice, maxPrice, search, ...filterData } = filters;

	const total = await prisma.book.count();

	const options = calculatePagination(pageOptions, total);
	const page = options.page as number;
	const size = options.size as number;
	const skip = options.skip as number;
	const totalPage = options.totalPage as number;

	const sortCondition: { [key: string]: string } = {};

	const { sortBy, sortOrder } = options;

	if (sortBy && sortOrder) {
		sortCondition[sortBy] = sortOrder;
	} else {
		sortCondition.createdAt = 'desc';
	}

	const andCondition = [];

	if (search) {
		andCondition.push({
			OR: bookSearchableFields.map((field) => ({
				[field]: {
					contains: search,
					mode: 'insensitive',
				},
			})),
		});
	}

	if (Object.keys(filterData).length > 0) {
		andCondition.push({
			AND: Object.entries(filterData).map(([field, value]) => {
				let copyField = field;
				if (field === 'category') {
					copyField = 'categoryId';
				}

				return { [copyField]: { equals: value } };
			}),
		});
	}

	// price: {
	// 			gte: 100,
	// 			lte: 150,
	// 		},

	const priceFilter: { [key: string]: unknown } = {};

	if (minPrice) {
		priceFilter.gte = Number(minPrice);
	}
	if (maxPrice) {
		priceFilter.lte = Number(maxPrice);
	}

	if (Object.keys(priceFilter).length > 0) {
		andCondition.push({
			price: { ...priceFilter },
		});
	}
	const whereConditons: Prisma.BookWhereInput =
		andCondition.length > 0 ? { AND: andCondition } : {};

	const result = await prisma.book.findMany({
		where: whereConditons,
		skip,
		take: size,
		orderBy: sortCondition,
		include: {
			category: true,
		},
	});

	return {
		data: result,
		meta: {
			total,
			page,
			size,
			totalPage,
		},
	};
};

// const getBookById = async (id: string): Promise<Book | null> => {
// 	const result = await prisma.category.findUnique({
// 		where: { id },
// 		include: {
// 			books: true,
// 		},
// 	});

// 	return result;
// };

// const updateBook = async (id: string, data: Partial<Book>): Promise<Book> => {
// 	const result = await prisma.category.update({
// 		where: { id },
// 		data,
// 	});

// 	return result;
// };

// const deletBook = async (id: string): Promise<Book> => {
// 	const result = await prisma.category.delete({
// 		where: { id },
// 	});

// 	return result;
// };

export const bookService = {
	createBook,
	getAllBooks,
	// getBookById,
	// updateBook,
	// deletBook,
};
