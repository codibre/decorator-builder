import { Args, Decorator, DecoratorItem } from './types';

export function createMethodDecorator<TDecoratorArgs extends Args>(
	callback?: (decoratorItem: DecoratorItem<TDecoratorArgs>) => void,
): Decorator<TDecoratorArgs> {
	const mapped: DecoratorItem<TDecoratorArgs>[] = [];
	const result = ((...args: TDecoratorArgs): MethodDecorator => {
		return <T>(
			target: Object,
			methodName: string | symbol,
			descriptor: TypedPropertyDescriptor<T>,
		): void => {
			const decoratorItem = {
				target,
				args,
				descriptor,
				methodName,
			};
			mapped.push(decoratorItem);
			callback?.(decoratorItem);
		};
	}) as Decorator<TDecoratorArgs>;
	result[Symbol.iterator] = () => mapped[Symbol.iterator]();
	return result;
}
