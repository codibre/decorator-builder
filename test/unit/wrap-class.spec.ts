import { wrapClass } from '../../src';

describe(wrapClass.name, () => {
	it('should replace the prototype of a abstract class', () => {
		const stub = jest.fn().mockImplementation((x) => (x.b = 1));

		abstract class Test {
			a() {
				return 1;
			}
		}

		const result = wrapClass(Test, stub);
		class Test2 extends result {}
		const instance = new Test2();

		expect(stub).toHaveCallsLike([instance]);
		expect(result.name).toEqual(Test.name);
		expect(Object.getPrototypeOf(result)).toBe(Test);
		expect(instance).toBeInstanceOf(Test);
		expect((instance as any).b).toBe(1);
	});

	it('should replace the prototype of a class', () => {
		const stub = jest.fn().mockImplementation((x) => (x.a = 1));

		class Test {
			a() {
				return 1;
			}
		}

		const result = wrapClass(Test, stub);
		const instance = new result();

		expect(stub).toHaveCallsLike([instance]);
		expect(result.name).toEqual(Test.name);
		expect(Object.getPrototypeOf(result)).toBe(Test);
		expect(instance).toBeInstanceOf(Test);
		expect(instance.a).toBe(1);
	});
});
