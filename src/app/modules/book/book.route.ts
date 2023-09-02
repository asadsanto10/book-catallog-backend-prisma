import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth/auth.middleware';
import { validateRequest } from '../../middlewares/validateRequest/validateRequest';
import { createBook, getAllBooks } from './book.controller';
import { bookValidation } from './book.validation';
// prettier-ignore

const router = express.Router();

router.post(
	'/create-book',
	auth(ENUM_USER_ROLE.ADMIN),
	validateRequest(bookValidation.createBookZodSchema),
	createBook
);

router.get('/', getAllBooks);

// router.get('/:id', getBookById);

// router.patch(
// 	'/:id',
// 	auth(ENUM_USER_ROLE.ADMIN),
// 	validateRequest(bookValidation.updateBookZodSchema),
// 	updateBook
// );

// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), deletBook);

export const bookRoutes = router;
