import { z } from 'zod';

const createOrderZodSchema = z.object({
	body: z.object({
		orderedBooks: z.array(
			z.object({
				bookId: z.string({
					required_error: 'bookId is re',
				}),
				quantity: z.number({
					required_error: 'bookId is re',
				}),
			})
		),
	}),
});

export const orderValidation = {
	createOrderZodSchema,
};
