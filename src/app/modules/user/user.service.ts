import prisma, { prismaExclude } from '../../../shared/prisma';
import { IUserResponse } from './user.interface';

const getAllUsers = async (): Promise<IUserResponse[]> => {
	const result = await prisma.user.findMany({
		select: prismaExclude('User', ['password']),
	});

	return result;
};

const getUserById = async (id: string): Promise<IUserResponse | null> => {
	const result = await prisma.user.findUnique({
		where: { id },
		select: prismaExclude('User', ['password', 'role']),
	});
	return result;
};
export const userService = { getAllUsers, getUserById };
