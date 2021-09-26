import { createMethodDecorator, MethodDecoratorItem } from '../../src';

describe(createMethodDecorator.name, () => {
	it('should create an iterable method decorator', () => {
		const result = createMethodDecorator<(a: string, b: number) => void>();

		class Test {
			@result('a', 2)
			c() {
				return 1;
			}
		}

		class Test2 {
			@result('b', 3)
			d() {
				return 1;
			}
		}

		const items = Array.from(result);

		expect(items).toEqual([
			{
				args: ['a', 2],
				target: Test.prototype,
				descriptor: expect.anything(),
				name: 'c',
			},
			{
				args: ['b', 3],
				target: Test2.prototype,
				descriptor: expect.anything(),
				name: 'd',
			},
		] as MethodDecoratorItem<any>[]);
	});

	it('should call the callback for each decorator appliance', () => {
		const stub = jest.fn();
		const result = createMethodDecorator<(a: string, b: number) => void>(stub);

		class Test {
			@result('a', 2)
			c() {
				return 1;
			}
		}

		class Test2 {
			@result('b', 3)
			d() {
				return 1;
			}
		}

		expect(stub).toHaveCallsLike(
			[
				{
					args: ['a', 2],
					target: Test.prototype,
					descriptor: expect.anything(),
					name: 'c',
				},
			],
			[
				{
					args: ['b', 3],
					target: Test2.prototype,
					descriptor: expect.anything(),
					name: 'd',
				},
			],
		);
	});
});
