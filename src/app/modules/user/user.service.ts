import { User } from '@prisma/client';
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

const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
	const result = await prisma.user.update({
		where: { id },
		data,
	});

	return result;
};

const deleteUser = async (id: string): Promise<User> => {
	const result = await prisma.user.delete({
		where: { id },
	});

	return result;
};

export const userService = { getAllUsers, getUserById, updateUser, deleteUser };
