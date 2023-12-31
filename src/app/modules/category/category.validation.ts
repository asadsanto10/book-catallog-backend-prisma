import { z } from 'zod';

const createCategoryZodSchema = z.object({
	body: z.object({
		title: z.string({
			required_error: 'title is required',
		}),
	}),
});

const updateCategoryZodSchema = z.object({
	body: z.object({
		title: z.string().optional(),
	}),
});

export const categoryValidation = {
	createCategoryZodSchema,
	updateCategoryZodSchema,
};
