import { User } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { IUserResponse } from './user.interface';
import { userService } from './user.service';

export const getAllUsers: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const result = await userService.getAllUsers();

		sendResponse<IUserResponse[]>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'User fetch successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const getUserById: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { id } = req.params;

		const result = await userService.getUserById(id);

		sendResponse<IUserResponse>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'User fetch successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const updateUser: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { id } = req.params;
		const data = req.body as Partial<User>;

		const result = await userService.updateUser(id, data);

		sendResponse<User>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'User update successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const deleteUser: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { id } = req.params;

		const result = await userService.deleteUser(id);

		sendResponse<User>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'User delete successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};
