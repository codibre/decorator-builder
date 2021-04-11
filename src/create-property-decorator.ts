import { Func } from 'is-this-a-pigeon';
import { IterablePropertyDecorator, PropertyDecoratorItem } from './types';

export function createPropertyDecorator<
	TFunc extends Func<any, void> = () => void
>(
	callback?: (decoratorItem: PropertyDecoratorItem<Parameters<TFunc>>) => void,
): IterablePropertyDecorator<Parameters<TFunc>> {
	const mapped: PropertyDecoratorItem<Parameters<TFunc>>[] = [];
	const result = ((...args: Parameters<TFunc>): PropertyDecorator => {
		return (target: Object, name: string | symbol): void => {
			const decoratorItem: PropertyDecoratorItem<Parameters<TFunc>> = {
				target,
				args,
				name,
			};
			mapped.push(decoratorItem);
			callback?.(decoratorItem);
		};
	}) as IterablePropertyDecorator<Parameters<TFunc>>;
	result[Symbol.iterator] = () => mapped[Symbol.iterator]();
	return result;
}
