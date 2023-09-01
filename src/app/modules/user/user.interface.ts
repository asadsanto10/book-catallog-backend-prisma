import { User } from '@prisma/client';

export type IUserResponse = Omit<User, 'password' | 'role'>;
