import { Func } from 'is-this-a-pigeon';
import { prepareDecorator } from './prepare-decorator';
import { IterableClassDecorator, ClassDecoratorItem } from './types';

export function createClassDecorator<
	TFunc extends Func<any, void> = () => void
>(
	callback?: (decoratorItem: ClassDecoratorItem<Parameters<TFunc>>) => void,
): IterableClassDecorator<Parameters<TFunc>> {
	const mapped: ClassDecoratorItem<Parameters<TFunc>>[] = [];
	const result = ((...args: Parameters<TFunc>): ClassDecorator => {
		return <TFunction extends Function>(target: TFunction): void => {
			const decoratorItem = {
				target,
				args,
			};
			mapped.push(decoratorItem);
			return callback?.(decoratorItem);
		};
	}) as IterableClassDecorator<Parameters<TFunc>>;
	prepareDecorator(result, mapped);
	return result;
}
