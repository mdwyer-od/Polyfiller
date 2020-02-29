/**
 * Ensures that the given item is in fact an array
 *
 * @param item
 * @returns
 */
export function ensureArray<T>(item: T | T[]): T[] {
	return Array.isArray(item) ? item : [item];
}
