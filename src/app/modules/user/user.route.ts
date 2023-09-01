import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth/auth.middleware';
import { getAllUsers, getUserById } from './user.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), getAllUsers);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), getUserById);

// router.patch(
// 	'/:id',
// 	auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
// 	validateRequest(StudentValidation.update),
// 	StudentController.updateIntoDB
// );

// router.delete(
// 	'/:id',
// 	auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
// 	StudentController.deleteFromDB
// );

export const userRoutes = router;
