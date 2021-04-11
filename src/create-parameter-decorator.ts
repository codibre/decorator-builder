import { Func } from 'is-this-a-pigeon';
import { IterableParameterDecorator, ParameterDecoratorItem } from './types';

export function createParameterDecorator<
	TFunc extends Func<any, void> = () => void
>(
	callback?: (decoratorItem: ParameterDecoratorItem<Parameters<TFunc>>) => void,
): IterableParameterDecorator<Parameters<TFunc>> {
	const mapped: ParameterDecoratorItem<Parameters<TFunc>>[] = [];
	const result = ((...args: Parameters<TFunc>): ParameterDecorator => {
		return (target: Object, name: string | symbol, index: number): void => {
			const decoratorItem: ParameterDecoratorItem<Parameters<TFunc>> = {
				target,
				args,
				name,
				index,
			};
			mapped.push(decoratorItem);
			callback?.(decoratorItem);
		};
	}) as IterableParameterDecorator<Parameters<TFunc>>;
	result[Symbol.iterator] = () => mapped[Symbol.iterator]();
	return result;
}
