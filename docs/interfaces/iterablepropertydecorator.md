[fluent-iterable - v0.2.2](../README.md) / IterablePropertyDecorator

# Interface: IterablePropertyDecorator<TDecoratorArgs\>

## Type parameters

Name | Type |
:------ | :------ |
`TDecoratorArgs` | Args |

## Hierarchy

* [*IterableDecorator*](iterabledecorator.md)<[*PropertyDecoratorItem*](propertydecoratoritem.md)<TDecoratorArgs\>\>

  ↳ **IterablePropertyDecorator**

## Callable

▸ **IterablePropertyDecorator**(...`args`: TDecoratorArgs): PropertyDecorator

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | TDecoratorArgs |

**Returns:** PropertyDecorator

## Table of contents

### Methods

- [[Symbol.iterator]](iterablepropertydecorator.md#[symbol.iterator])
- [clear](iterablepropertydecorator.md#clear)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<[*PropertyDecoratorItem*](propertydecoratoritem.md)<TDecoratorArgs\>, any, undefined\>

**Returns:** *Iterator*<[*PropertyDecoratorItem*](propertydecoratoritem.md)<TDecoratorArgs\>, any, undefined\>

Inherited from: [IterableDecorator](iterabledecorator.md)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Inherited from: [IterableDecorator](iterabledecorator.md)
