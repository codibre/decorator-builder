import { Func } from 'is-this-a-pigeon';
import { IterableMethodDecorator, MethodDecoratorItem } from './types';

export function createMethodDecorator<
	TFunc extends Func<any, void> = () => void
>(
	callback?: (decoratorItem: MethodDecoratorItem<Parameters<TFunc>>) => void,
): IterableMethodDecorator<Parameters<TFunc>> {
	const mapped: MethodDecoratorItem<Parameters<TFunc>>[] = [];
	const result = ((...args: Parameters<TFunc>): MethodDecorator => {
		return <T>(
			target: Object,
			name: string | symbol,
			descriptor: TypedPropertyDescriptor<T>,
		): void => {
			const decoratorItem: MethodDecoratorItem<Parameters<TFunc>> = {
				target,
				args,
				descriptor,
				name,
			};
			mapped.push(decoratorItem);
			return callback?.(decoratorItem);
		};
	}) as IterableMethodDecorator<Parameters<TFunc>>;
	result[Symbol.iterator] = () => mapped[Symbol.iterator]();
	return result;
}
