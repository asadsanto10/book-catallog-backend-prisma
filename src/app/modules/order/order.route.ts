import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth/auth.middleware';
import { validateRequest } from '../../middlewares/validateRequest/validateRequest';
import { createOrder, getAllOrders } from './order.controller';
import { orderValidation } from './order.validation';
// prettier-ignore
// prettier-ignore

const router = express.Router();

router.post(
	'/create-order',
	auth(ENUM_USER_ROLE.CUSTOMER),
	validateRequest(orderValidation.createOrderZodSchema),
	createOrder
);

router.get('/', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), getAllOrders);

// router.get('/:orderId', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), getOrderById);

export const orderRoutes = router;
