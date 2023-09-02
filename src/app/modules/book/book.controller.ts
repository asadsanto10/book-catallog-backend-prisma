import { Book } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookService } from './book.service';
import { bookFilterableFields, bookOptions } from './book.variable';

export const createBook: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const data = req.body as Book;
		const result = await bookService.createBook(data);

		sendResponse<Book>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Book create successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const getAllBooks: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const filters = pick(req.query, bookFilterableFields);
		const options = pick(req.query, bookOptions);

		const result = await bookService.getAllBooks(filters, options);

		sendResponse<Book[]>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Book fetch successfully',
			meta: result.meta,
			data: result.data,
		});
	} catch (error) {
		next(error);
	}
};

// export const getBookById: RequestHandler = async (req, res, next): Promise<void> => {
// 	try {
// 		const { id } = req.params;

// 		const result = await bookService.getBookById(id);

// 		sendResponse<Book>(res, {
// 			statusCode: httpStatus.OK,
// 			status: 'success',
// 			message: 'Book fetch successfully',
// 			data: result,
// 		});
// 	} catch (error) {
// 		next(error);
// 	}
// };

// export const updateBook: RequestHandler = async (req, res, next): Promise<void> => {
// 	try {
// 		const { id } = req.params;
// 		const data = req.body as Partial<Category>;

// 		const result = await bookService.updateBook(id, data);

// 		sendResponse<Book>(res, {
// 			statusCode: httpStatus.OK,
// 			status: 'success',
// 			message: 'Book update successfully',
// 			data: result,
// 		});
// 	} catch (error) {
// 		next(error);
// 	}
// };

// export const deletBook: RequestHandler = async (req, res, next): Promise<void> => {
// 	try {
// 		const { id } = req.params;

// 		const result = await bookService.deletBook(id);

// 		sendResponse<Book>(res, {
// 			statusCode: httpStatus.OK,
// 			status: 'success',
// 			message: 'Book delete successfully',
// 			data: result,
// 		});
// 	} catch (error) {
// 		next(error);
// 	}
// };
