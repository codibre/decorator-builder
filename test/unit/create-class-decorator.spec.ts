import { ClassDecoratorItem, createClassDecorator } from '../../src';

describe(createClassDecorator.name, () => {
	it('should create an iterable class decorator', () => {
		const result = createClassDecorator<(a: string, b: number) => void>();

		@result('a', 2)
		class Test {}

		@result('b', 3)
		class Test2 {}

		const items = Array.from(result);

		expect(items).toEqual([
			{
				args: ['a', 2],
				target: Test,
			},
			{
				args: ['b', 3],
				target: Test2,
			},
		] as ClassDecoratorItem<any>[]);
	});

	it('should call callback for each class where the decorator is applied', () => {
		const stub = jest.fn();
		const result = createClassDecorator<(a: string, b: number) => void>(stub);

		@result('a', 2)
		class Test {}

		@result('b', 3)
		class Test2 {}

		expect(stub).toHaveCallsLike(
			[
				{
					args: ['a', 2],
					target: Test,
				} as ClassDecoratorItem<any>,
			],
			[
				{
					args: ['b', 3],
					target: Test2,
				} as ClassDecoratorItem<any>,
			],
		);
	});
});
