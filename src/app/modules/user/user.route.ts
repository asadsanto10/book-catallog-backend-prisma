import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth/auth.middleware';
import { validateRequest } from '../../middlewares/validateRequest/validateRequest';
import { deleteUser, getAllUsers, getUserById, updateUser } from './user.controller';
import { userValidation } from './user.validation';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), getAllUsers);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), getUserById);

router.patch(
	'/:id',
	auth(ENUM_USER_ROLE.ADMIN),
	validateRequest(userValidation.updateUserZodSchema),
	updateUser
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), deleteUser);

export const userRoutes = router;
