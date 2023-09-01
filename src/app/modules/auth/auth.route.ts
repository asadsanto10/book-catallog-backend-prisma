import express from 'express';

import { validateRequest } from '../../middlewares/validateRequest/validateRequest';
import { createUser } from './auth.controller';
import { authValidation } from './auth.validation';

const router = express.Router();

router.post('/signup', validateRequest(authValidation.createZodSchema), createUser);

export const authRoutes = router;
