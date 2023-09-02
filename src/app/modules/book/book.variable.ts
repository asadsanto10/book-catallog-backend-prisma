export const bookFilterableFields: string[] = ['minPrice', 'maxPrice', 'category', 'search'];

export const bookSearchableFields: string[] = ['title', 'author', 'genre'];

export const bookRelationalFields: string[] = ['category'];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
	category: 'category',
};

export const bookOptions = ['size', 'page', 'sortBy', 'sortOrder'];
