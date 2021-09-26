import { Args } from 'is-this-a-pigeon';
import { MethodDecoratorItem } from './types';

/**
 * Replaces a method referenced by a method decorator item.
 * Useful to write decorators that wrap another methods
 * @param item The MethodDecoratorItem
 * @param replacementFactory the
 */
export function replaceMethod<T extends Args>(
	item: MethodDecoratorItem<T>,
	replacementFactory: (previous: CallableFunction) => CallableFunction,
) {
	const previous = item.target[
		item.name as keyof typeof item.target
	] as CallableFunction;
	const replacement = replacementFactory(previous);
	(item.target[item.name as keyof typeof item.target] as any) = replacement;
	if (item.descriptor.set) {
		item.descriptor.set(replacement);
	} else {
		item.descriptor.value = replacement;
	}
}
