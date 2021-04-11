import {
	AbstractClass,
	AbstractConstructorParameters,
	Class,
} from 'is-this-a-pigeon';

export function wrapClass<T extends Object, C extends Class<T>>(
	target: C,
	wrapper: <S extends T>(
		self: S,
		...args: AbstractConstructorParameters<AbstractClass<T>>
	) => T,
): C;
export function wrapClass<T extends Object, A extends AbstractClass<T>>(
	target: A,
	wrapper: <S extends T>(
		self: S,
		...args: AbstractConstructorParameters<AbstractClass<T>>
	) => T,
): A;
export function wrapClass<T extends Object>(
	target: AbstractClass<T>,
	wrapper: <S extends T>(
		self: S,
		...args: AbstractConstructorParameters<AbstractClass<T>>
	) => T,
): any {
	return class extends (target as any) {
		constructor(...args: AbstractConstructorParameters<AbstractClass<T>>) {
			super(...args);
			wrapper(this as any, ...args);
		}
	};
}
