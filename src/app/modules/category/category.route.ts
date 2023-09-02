import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth/auth.middleware';
import { validateRequest } from '../../middlewares/validateRequest/validateRequest';
// prettier-ignore
import {
  createCategory,
  deletCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from './category.controller';
import { categoryValidation } from './category.validation';

const router = express.Router();

router.post(
	'/create-category',
	auth(ENUM_USER_ROLE.ADMIN),
	validateRequest(categoryValidation.createCategoryZodSchema),
	createCategory
);

router.get('/', getAllCategories);

router.get('/:id', getCategoryById);

router.patch(
	'/:id',
	auth(ENUM_USER_ROLE.ADMIN),
	validateRequest(categoryValidation.updateCategoryZodSchema),
	updateCategory
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), deletCategory);

export const categoryRoutes = router;
