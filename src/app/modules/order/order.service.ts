import { Order, Prisma } from '@prisma/client';
import { ENUM_USER_ROLE } from '../../../enums/user';
import prisma from '../../../shared/prisma';

const createOrder = async (data: Order): Promise<Order> => {
	const result = await prisma.order.create({
		data: {
			userId: data.userId,
			orderedBooks: data.orderedBooks as Prisma.JsonArray,
		},
	});
	return result;
};

const getAllOrders = async (userId: string, role: string): Promise<Order[]> => {
	let result = [] as Array<Order>;
	if (role === ENUM_USER_ROLE.ADMIN) {
		result = await prisma.order.findMany();
	}
	if (role === ENUM_USER_ROLE.CUSTOMER) {
		result = await prisma.order.findMany({ where: { userId } });
	}

	return result;
};

const getOrderById = async (orderId: string): Promise<Order | null> => {
	const result = await prisma.order.findUnique({
		where: {
			id: orderId,
		},
	});

	return result;
};

export const orderService = {
	createOrder,
	getAllOrders,
	getOrderById,
};
