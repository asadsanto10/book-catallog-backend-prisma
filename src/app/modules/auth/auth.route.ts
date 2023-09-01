import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest/validateRequest';
import { createUser, loginUser } from './auth.controller';
import { authValidation } from './auth.validation';

const router = express.Router();

router.post('/signup', validateRequest(authValidation.createZodSchema), createUser);
router.post('/signin', validateRequest(authValidation.signinZodSchema), loginUser);

export const authRoutes = router;
