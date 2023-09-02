import { User } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import sendResponse from '../../../shared/sendResponse';
import { profileService } from './profile.service';

export const getUserProfile: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { userId } = req.user as JwtPayload;

		const result = await profileService.getUserProfile(userId);

		sendResponse<User>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'User profile fetch successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};
