import { z } from 'zod';

const createZodSchema = z.object({
	body: z.object({
		name: z.string({
			required_error: 'Name is required',
		}),
		email: z
			.string({
				required_error: 'email is required',
			})
			.email({ message: 'email must be a valid email address' }),
		password: z.string({
			required_error: 'password is required',
		}),
		role: z.string({
			required_error: 'role is required',
		}),
		contactNo: z.string({
			required_error: 'contactNo is required',
		}),
		address: z.string({
			required_error: 'address is required',
		}),
		profileImg: z.string({
			required_error: 'profileImg is required',
		}),
	}),
});

export const authValidation = {
	createZodSchema,
};
