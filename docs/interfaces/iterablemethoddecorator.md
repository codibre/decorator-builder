[fluent-iterable - v0.1.2](../README.md) / IterableMethodDecorator

# Interface: IterableMethodDecorator<TDecoratorArgs\>

## Type parameters

Name | Type |
:------ | :------ |
`TDecoratorArgs` | Args |

## Hierarchy

* *Iterable*<[*MethodDecoratorItem*](methoddecoratoritem.md)<TDecoratorArgs\>\>

  ↳ **IterableMethodDecorator**

## Callable

▸ **IterableMethodDecorator**(...`args`: TDecoratorArgs): MethodDecorator

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | TDecoratorArgs |

**Returns:** MethodDecorator

## Table of contents

### Methods

- [[Symbol.iterator]](iterablemethoddecorator.md#[symbol.iterator])

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<[*MethodDecoratorItem*](methoddecoratoritem.md)<TDecoratorArgs, any\>, any, undefined\>

**Returns:** *Iterator*<[*MethodDecoratorItem*](methoddecoratoritem.md)<TDecoratorArgs, any\>, any, undefined\>

Inherited from: Iterable.__@iterator
