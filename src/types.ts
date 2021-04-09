/* eslint-disable @typescript-eslint/no-explicit-any */
export type Args = any[];
export type Class<T = unknown> = new (...args: Args) => T;
export type Func<A extends Args = Args, R = any> = (...args: A) => R;
export interface DecoratorItem<TDecoratorArgs extends Args> {
	args: TDecoratorArgs;
	target: Object;
	methodName: string | symbol;
	descriptor: TypedPropertyDescriptor<any>;
}
export interface Decorator<TDecoratorArgs extends Args>
	extends Iterable<DecoratorItem<TDecoratorArgs>> {
	(...args: TDecoratorArgs): MethodDecorator;
}
