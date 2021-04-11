import { wrapMethod } from '../../src';
import './setup';

describe(wrapMethod.name, () => {
	it('should replace the method of a prototype', () => {
		class Test {
			a() {
				return 1;
			}
		}

		const method = wrapMethod(
			Test.prototype,
			'a',
			(previous) => previous() + 1,
		);
		const instance = new Test();
		const result = instance.a();

		expect(method).toBeInstanceOf(Function);
		expect(result).toEqual(2);
	});

	it('should replace the method of a instance', () => {
		class Test {
			a() {
				return 1;
			}
		}

		const instance = new Test();
		const method = wrapMethod(instance, 'a', (previous) => previous() + 1);
		const result = instance.a();

		expect(method).toBeInstanceOf(Function);
		expect(result).toEqual(2);
	});

	it('should throw an error when trying to replace a property of a prototype', () => {
		class Test {
			a() {
				return 1;
			}
			b = 1;
		}
		let thrownError: any;

		try {
			wrapMethod(
				Test.prototype,
				'b' as any,
				(previous: number) => previous + 1,
			);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(TypeError);
	});

	it('should throw n error when trying to replace a property of a instance', () => {
		class Test {
			a() {
				return 1;
			}
			b = 1;
		}
		let thrownError: any;
		const instance = new Test();

		try {
			wrapMethod(instance, 'b' as any, (previous: number) => previous + 1);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(TypeError);
	});
});
