import 'reflect-metadata';
import 'jest-extended';
import 'jest-callslike';

afterEach(() => {
	jest.restoreAllMocks();
	jest.clearAllMocks();
});

declare global {
	function getNames<T extends object>(c: { prototype: T }): T;
	function fName<T extends object>(result: T[keyof T]): string;
}

global.fName = function fName<T extends object>(result: T[keyof T]): string {
	return `${result}()`;
};

global.getNames = function getNames<T extends object>(c: { prototype: T }): T {
	return new Proxy(c.prototype, {
		get(target: T, property: string) {
			const result = target[property as keyof T];
			if (!result) {
				throw new Error(`Method ${property} doesn't exist`);
			}

			return fName<T>(result);
		},
	});
};
