import { createPropertyDecorator, PropertyDecoratorItem } from '../../src';

describe(createPropertyDecorator.name, () => {
	it('should create an iterable method decorator', () => {
		const result = createPropertyDecorator<(a: string, b: number) => void>();

		class Test {
			@result('a', 2)
			c = 1;
		}

		class Test2 {
			@result('b', 3)
			d = 2;
		}

		const items = Array.from(result);

		expect(items).toEqual([
			{
				args: ['a', 2],
				target: Test.prototype,
				name: 'c',
			},
			{
				args: ['b', 3],
				target: Test2.prototype,
				name: 'd',
			},
		] as PropertyDecoratorItem<any>[]);
	});

	it('should call the callback for each decorator appliance', () => {
		const stub = jest.fn();
		const result = createPropertyDecorator<(a: string, b: number) => void>(
			stub,
		);

		class Test {
			@result('a', 2)
			c = 1;
		}

		class Test2 {
			@result('b', 3)
			d = 2;
		}

		expect(stub).toHaveCallsLike(
			[
				{
					args: ['a', 2],
					target: Test.prototype,
					name: 'c',
				},
			],
			[
				{
					args: ['b', 3],
					target: Test2.prototype,
					name: 'd',
				},
			],
		);
	});
});
