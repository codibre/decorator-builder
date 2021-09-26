[fluent-iterable - v0.2.4](../README.md) / IterableMethodDecorator

# Interface: IterableMethodDecorator<TDecoratorArgs\>

## Type parameters

Name | Type |
:------ | :------ |
`TDecoratorArgs` | Args |

## Hierarchy

* [*IterableDecorator*](iterabledecorator.md)<[*MethodDecoratorItem*](methoddecoratoritem.md)<TDecoratorArgs\>\>

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
- [clear](iterablemethoddecorator.md#clear)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<[*MethodDecoratorItem*](methoddecoratoritem.md)<TDecoratorArgs, any\>, any, undefined\>

**Returns:** *Iterator*<[*MethodDecoratorItem*](methoddecoratoritem.md)<TDecoratorArgs, any\>, any, undefined\>

Inherited from: [IterableDecorator](iterabledecorator.md)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Inherited from: [IterableDecorator](iterabledecorator.md)
