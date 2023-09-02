import { Order } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import sendResponse from '../../../shared/sendResponse';
import { orderService } from './order.service';

export const createOrder: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { userId } = req.user as JwtPayload;
		const data = req.body as Partial<Order>;

		const orderData = { userId, ...data } as Order;
		const result = await orderService.createOrder(orderData);

		sendResponse<Order>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Order  create successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const getAllOrders: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { userId, role } = req.user as JwtPayload;

		const result = await orderService.getAllOrders(userId, role);

		sendResponse<Order[]>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Order fetch successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

export const getOrderById: RequestHandler = async (req, res, next): Promise<void> => {
	try {
		const { orderId } = req.params;

		const result = await orderService.getOrderById(orderId);

		sendResponse<Order>(res, {
			statusCode: httpStatus.OK,
			status: 'success',
			message: 'Order fetch successfully',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};
