import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import variable from '../../../config';
import ApiError from '../../../errors/apiError';
import { createToken } from '../../../helpers/jwt.herlpers';
import prisma from '../../../shared/prisma';
import { ILoginUser, ILoginUserResponse } from './auth.interface';

const createUser = async (data: User): Promise<User> => {
	const result = await prisma.user.create({ data });
	return result;
};

const loginUser = async (data: ILoginUser): Promise<ILoginUserResponse> => {
	const isUserExist = await prisma.user.findUnique({ where: { email: data.email } });
	if (!isUserExist) {
		throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
	}

	// password matching
	const matchPassword = data.password === isUserExist.password;

	if (isUserExist && !matchPassword) {
		throw new ApiError(httpStatus.UNAUTHORIZED, 'Login failed please try again!!');
	}

	const token = createToken(
		{ userId: isUserExist.id, role: isUserExist.role },
		variable.jwtSecret as Secret,
		variable.jwtExpireTime as string
	);

	return { token };
};

export const userService = { createUser, loginUser };
