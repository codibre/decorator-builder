[fluent-iterable - v0.1.3](../README.md) / IterableParameterDecorator

# Interface: IterableParameterDecorator<TDecoratorArgs\>

## Type parameters

Name | Type |
:------ | :------ |
`TDecoratorArgs` | Args |

## Hierarchy

* [*IterableDecorator*](iterabledecorator.md)<[*ParameterDecoratorItem*](parameterdecoratoritem.md)<TDecoratorArgs\>\>

  ↳ **IterableParameterDecorator**

## Callable

▸ **IterableParameterDecorator**(...`args`: TDecoratorArgs): ParameterDecorator

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | TDecoratorArgs |

**Returns:** ParameterDecorator

## Table of contents

### Methods

- [[Symbol.iterator]](iterableparameterdecorator.md#[symbol.iterator])
- [clear](iterableparameterdecorator.md#clear)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<[*ParameterDecoratorItem*](parameterdecoratoritem.md)<TDecoratorArgs\>, any, undefined\>

**Returns:** *Iterator*<[*ParameterDecoratorItem*](parameterdecoratoritem.md)<TDecoratorArgs\>, any, undefined\>

Inherited from: [IterableDecorator](iterabledecorator.md)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Inherited from: [IterableDecorator](iterabledecorator.md)
