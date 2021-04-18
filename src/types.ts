import { Args } from 'is-this-a-pigeon';

export interface DecoratorItem<TDecoratorArgs extends Args> {
	args: TDecoratorArgs;
}

export interface PropertyDecoratorItem<TDecoratorArgs extends Args>
	extends DecoratorItem<TDecoratorArgs> {
	target: Object;
	name: string | symbol;
}

export interface MethodDecoratorItem<TDecoratorArgs extends Args, T = any>
	extends PropertyDecoratorItem<TDecoratorArgs> {
	descriptor: TypedPropertyDescriptor<T>;
}

export interface ParameterDecoratorItem<TDecoratorArgs extends Args>
	extends PropertyDecoratorItem<TDecoratorArgs> {
	index: number;
}

export interface ClassDecoratorItem<
	TDecoratorArgs extends Args,
	TFunction extends Function = Function
> extends DecoratorItem<TDecoratorArgs> {
	target: TFunction;
}

export interface IterableDecorator<T> extends Iterable<T> {
	clear(): void;
}

export interface IterableMethodDecorator<TDecoratorArgs extends Args>
	extends IterableDecorator<MethodDecoratorItem<TDecoratorArgs>> {
	(...args: TDecoratorArgs): MethodDecorator;
}

export interface IterableClassDecorator<TDecoratorArgs extends Args>
	extends IterableDecorator<ClassDecoratorItem<TDecoratorArgs>> {
	(...args: TDecoratorArgs): ClassDecorator;
}

export interface IterablePropertyDecorator<TDecoratorArgs extends Args>
	extends IterableDecorator<PropertyDecoratorItem<TDecoratorArgs>> {
	(...args: TDecoratorArgs): PropertyDecorator;
}

export interface IterableParameterDecorator<TDecoratorArgs extends Args>
	extends IterableDecorator<ParameterDecoratorItem<TDecoratorArgs>> {
	(...args: TDecoratorArgs): ParameterDecorator;
}
