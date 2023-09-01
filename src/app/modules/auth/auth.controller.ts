import { User } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './auth.service';

export const createUser: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const userData = req.body as User;
		const result = await userService.createUser(userData);

		sendResponse<User>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'User created successfully!',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};
