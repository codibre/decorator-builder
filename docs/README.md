fluent-iterable - v0.2.3

# fluent-iterable - v0.2.3

## Table of contents

### Interfaces

- [ClassDecoratorItem](interfaces/classdecoratoritem.md)
- [DecoratorItem](interfaces/decoratoritem.md)
- [IterableClassDecorator](interfaces/iterableclassdecorator.md)
- [IterableDecorator](interfaces/iterabledecorator.md)
- [IterableMethodDecorator](interfaces/iterablemethoddecorator.md)
- [IterableParameterDecorator](interfaces/iterableparameterdecorator.md)
- [IterablePropertyDecorator](interfaces/iterablepropertydecorator.md)
- [MethodDecoratorItem](interfaces/methoddecoratoritem.md)
- [ParameterDecoratorItem](interfaces/parameterdecoratoritem.md)
- [PropertyDecoratorItem](interfaces/propertydecoratoritem.md)

### Functions

- [createClassDecorator](README.md#createclassdecorator)
- [createMethodDecorator](README.md#createmethoddecorator)
- [createParameterDecorator](README.md#createparameterdecorator)
- [createPropertyDecorator](README.md#createpropertydecorator)
- [replaceMethod](README.md#replacemethod)
- [wrapClass](README.md#wrapclass)
- [wrapMethod](README.md#wrapmethod)

## Functions

### createClassDecorator

▸ **createClassDecorator**<TFunc\>(`callback?`: (`decoratorItem`: [*ClassDecoratorItem*](interfaces/classdecoratoritem.md)<Parameters<TFunc\>\>) => *void*): [*IterableClassDecorator*](interfaces/iterableclassdecorator.md)<Parameters<TFunc\>\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TFunc` | *Func*<any, void\> | () => *void* |

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | (`decoratorItem`: [*ClassDecoratorItem*](interfaces/classdecoratoritem.md)<Parameters<TFunc\>\>) => *void* |

**Returns:** [*IterableClassDecorator*](interfaces/iterableclassdecorator.md)<Parameters<TFunc\>\>

___

### createMethodDecorator

▸ **createMethodDecorator**<TFunc\>(`callback?`: (`decoratorItem`: [*MethodDecoratorItem*](interfaces/methoddecoratoritem.md)<Parameters<TFunc\>\>) => *void*): [*IterableMethodDecorator*](interfaces/iterablemethoddecorator.md)<Parameters<TFunc\>\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TFunc` | *Func*<any, void\> | () => *void* |

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | (`decoratorItem`: [*MethodDecoratorItem*](interfaces/methoddecoratoritem.md)<Parameters<TFunc\>\>) => *void* |

**Returns:** [*IterableMethodDecorator*](interfaces/iterablemethoddecorator.md)<Parameters<TFunc\>\>

___

### createParameterDecorator

▸ **createParameterDecorator**<TFunc\>(`callback?`: (`decoratorItem`: [*ParameterDecoratorItem*](interfaces/parameterdecoratoritem.md)<Parameters<TFunc\>\>) => *void*): [*IterableParameterDecorator*](interfaces/iterableparameterdecorator.md)<Parameters<TFunc\>\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TFunc` | *Func*<any, void\> | () => *void* |

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | (`decoratorItem`: [*ParameterDecoratorItem*](interfaces/parameterdecoratoritem.md)<Parameters<TFunc\>\>) => *void* |

**Returns:** [*IterableParameterDecorator*](interfaces/iterableparameterdecorator.md)<Parameters<TFunc\>\>

___

### createPropertyDecorator

▸ **createPropertyDecorator**<TFunc\>(`callback?`: (`decoratorItem`: [*PropertyDecoratorItem*](interfaces/propertydecoratoritem.md)<Parameters<TFunc\>\>) => *void*): [*IterablePropertyDecorator*](interfaces/iterablepropertydecorator.md)<Parameters<TFunc\>\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TFunc` | *Func*<any, void\> | () => *void* |

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | (`decoratorItem`: [*PropertyDecoratorItem*](interfaces/propertydecoratoritem.md)<Parameters<TFunc\>\>) => *void* |

**Returns:** [*IterablePropertyDecorator*](interfaces/iterablepropertydecorator.md)<Parameters<TFunc\>\>

___

### replaceMethod

▸ **replaceMethod**<T\>(`item`: [*MethodDecoratorItem*](interfaces/methoddecoratoritem.md)<T\>, `replacementFactory`: (`previous`: Function) => CallableFunction): *void*

Replaces a method referenced by a method decorator item.
Useful to write decorators that wrap another methods

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *any*[] |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`item` | [*MethodDecoratorItem*](interfaces/methoddecoratoritem.md)<T\> | The MethodDecoratorItem   |
`replacementFactory` | (`previous`: Function) => CallableFunction | the    |

**Returns:** *void*

___

### wrapClass

▸ **wrapClass**<T, C\>(`target`: C, `wrapper`: <S\>(`self`: S, ...`args`: *AbstractConstructorParameters*<AbstractClass<T\>\>) => T): C

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | Object |
`C` | *Class*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`target` | C |
`wrapper` | <S\>(`self`: S, ...`args`: *AbstractConstructorParameters*<AbstractClass<T\>\>) => T |

**Returns:** C

▸ **wrapClass**<T, A\>(`target`: A, `wrapper`: <S\>(`self`: S, ...`args`: *AbstractConstructorParameters*<AbstractClass<T\>\>) => T): A

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | Object |
`A` | *AbstractClass*<T\> |

#### Parameters:

Name | Type |
:------ | :------ |
`target` | A |
`wrapper` | <S\>(`self`: S, ...`args`: *AbstractConstructorParameters*<AbstractClass<T\>\>) => T |

**Returns:** A

___

### wrapMethod

▸ **wrapMethod**<TArgs, T, K\>(`target`: T, `name`: K, `callback`: T[K] *extends* Func ? (`previousVersion`: T[K], ...`args`: TArgs) => *ReturnType*<T[K]\> : *never*): *any*

#### Type parameters:

Name | Type |
:------ | :------ |
`TArgs` | *any*[] |
`T` | Object |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`target` | T |
`name` | K |
`callback` | T[K] *extends* Func ? (`previousVersion`: T[K], ...`args`: TArgs) => *ReturnType*<T[K]\> : *never* |

**Returns:** *any*
