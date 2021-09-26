import { createParameterDecorator, ParameterDecoratorItem } from '../../src';

describe(createParameterDecorator.name, () => {
	it('should create an iterable method decorator', () => {
		const result = createParameterDecorator<(a: string, b: number) => void>();

		class Test {
			c(
				@result('a', 2)
				p1: number,
			) {
				return p1;
			}
		}

		class Test2 {
			d(
				p1: string,
				@result('b', 3)
				p2: number,
			) {
				return p1 + p2;
			}
		}

		const items = Array.from(result);

		expect(items).toEqual([
			{
				args: ['a', 2],
				target: Test.prototype,
				name: 'c',
				index: 0,
			},
			{
				args: ['b', 3],
				target: Test2.prototype,
				name: 'd',
				index: 1,
			},
		] as ParameterDecoratorItem<any>[]);
	});

	it('should call the callback for each decorator appliance', () => {
		const stub = jest.fn();
		const result = createParameterDecorator<(a: string, b: number) => void>(
			stub,
		);

		class Test {
			c(
				@result('a', 2)
				p1: number,
			) {
				return p1;
			}
		}

		class Test2 {
			d(
				p1: string,
				@result('b', 3)
				p2: number,
			) {
				return p1 + p2;
			}
		}

		expect(stub).toHaveCallsLike(
			[
				{
					args: ['a', 2],
					target: Test.prototype,
					name: 'c',
					index: 0,
				},
			],
			[
				{
					args: ['b', 3],
					target: Test2.prototype,
					name: 'd',
					index: 1,
				},
			],
		);
	});
});
