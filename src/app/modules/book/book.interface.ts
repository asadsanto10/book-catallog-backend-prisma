export type IBookFilterRequest = {
	minPrice?: number | undefined;
	maxPrice?: number | undefined;
	category?: string | undefined;
	search?: string | undefined;
};
