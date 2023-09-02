import { z } from 'zod';

const createBookZodSchema = z.object({
	body: z.object({
		title: z.string({
			required_error: 'title is required',
		}),
		author: z.string({
			required_error: 'author is required',
		}),
		genre: z.string({
			required_error: 'genre is required',
		}),
		price: z.number({
			required_error: 'price is required',
		}),
		publicationDate: z.string({
			required_error: 'publication date is required',
		}),
		categoryId: z.string({
			required_error: 'category ID is required',
		}),
	}),
});

const updateBookZodSchema = z.object({
	body: z.object({
		title: z.string().optional(),
	}),
});

export const bookValidation = {
	createBookZodSchema,
	updateBookZodSchema,
};
