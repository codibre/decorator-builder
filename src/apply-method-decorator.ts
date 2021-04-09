import { Args, DecoratorItem, Func } from './types';

export function applyMethodDecorator<TArgs extends Args>(
	item: DecoratorItem<TArgs>,
	callback: <TFunc extends Func>(
		previousVersion: TFunc,
		...args: TArgs
	) => TFunc,
) {
	const previous = (item.target as Record<string, Func>)[
		item.methodName as string
	];
	(item.target as Record<string, Func>)[item.methodName as string] = function (
		this: Object,
		...args: TArgs
	) {
		return callback(previous.bind(this), ...args);
	} as Func;
}
