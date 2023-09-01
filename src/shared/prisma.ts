import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
	errorFormat: 'minimal',
});

type A<T extends string> = T extends `${infer U}ScalarFieldEnum` ? U : never;
type Entity = A<keyof typeof Prisma>;
type Keys<T extends Entity> = Extract<
	keyof (typeof Prisma)[keyof Pick<typeof Prisma, `${T}ScalarFieldEnum`>],
	string
>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function prismaExclude<T extends Entity, K extends Keys<T>>(type: T, omit: K[]) {
	type Key = Exclude<Keys<T>, K>;
	type TMap = Record<Key, true>;
	const result: TMap = {} as TMap;
	// eslint-disable-next-line no-restricted-syntax
	for (const key in Prisma[`${type}ScalarFieldEnum`]) {
		if (!omit.includes(key as K)) {
			result[key as Key] = true;
		}
	}
	return result;
}

export default prisma;
