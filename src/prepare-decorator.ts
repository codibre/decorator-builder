import { IterableDecorator } from './types';

export function prepareDecorator<T>(
	result: IterableDecorator<T>,
	mapped: any[],
) {
	result[Symbol.iterator] = () => mapped[Symbol.iterator]();
	result.clear = () => (mapped.length = 0);
}
