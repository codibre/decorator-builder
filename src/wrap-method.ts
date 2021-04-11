import { Args, Func, isFunction, isKeyOf } from 'is-this-a-pigeon';

export function wrapMethod<
	TArgs extends Args,
	T extends Object,
	K extends keyof T
>(
	target: T,
	name: K,
	callback: T[K] extends Func
		? (previousVersion: T[K], ...args: TArgs) => ReturnType<T[K]>
		: never,
) {
	if (isKeyOf(name, target)) {
		const previous = target[name];
		if (isFunction(previous)) {
			return (target[name] = function (this: Object, ...args: TArgs) {
				return callback(previous.bind(this) as any, ...args);
			} as any);
		}
	}
	throw new TypeError("Can't wrap a property!");
}
