import { Category } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { categoryService } from './category.service';

export const createCategory: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const data = req.body as Category;
		const result = await categoryService.createCategory(data);

		sendResponse<Category>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Category create successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const getAllCategories: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const result = await categoryService.getAllCategories();

		sendResponse<Category[]>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Category fetch successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const getCategoryById: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { id } = req.params;

		const result = await categoryService.getCategoryById(id);

		sendResponse<Category>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Category fetch successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const updateCategory: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { id } = req.params;
		const data = req.body as Partial<Category>;

		const result = await categoryService.updateCategory(id, data);

		sendResponse<Category>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Category update successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const deletCategory: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { id } = req.params;

		const result = await categoryService.deletCategory(id);

		sendResponse<Category>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Category delete successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};
