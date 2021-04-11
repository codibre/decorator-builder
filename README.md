[![Actions Status](https://github.com/Codibre/decorator-builder/workflows/build/badge.svg)](https://github.com/Codibre/decorator-builder/actions)
[![Actions Status](https://github.com/Codibre/decorator-builder/workflows/test/badge.svg)](https://github.com/Codibre/decorator-builder/actions)
[![Actions Status](https://github.com/Codibre/decorator-builder/workflows/lint/badge.svg)](https://github.com/Codibre/decorator-builder/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/decorator-builder/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/decorator-builder/maintainability)
[![Packages](https://david-dm.org/Codibre/decorator-builder.svg)](https://david-dm.org/Codibre/decorator-builder)
[![npm version](https://badge.fury.io/js/decorator-builder.svg)](https://badge.fury.io/js/decorator-builder)

Easily create decorators for multiple and flexible purposes

## How to install

```
npm i decorator-builder
```

## How to use it
Just create your new decorator

```ts
const MyDecorator = createClassDecorator();
```

And then, apply it to your class!

```ts
@MyDecorator()
class MyClass {}
```

The generated decorator is also an Iterable, so, you can get access to every decorated class already loaded

```ts
for (const item of MyDecorator) {
  // Target is the Class and args the arguments informed into the decorator
  doABarrelRoll(item.target, item.args);
}
```

You can also create method decorators:

```ts
const MyDecorator = createMethodDecorator();
class MyClass {
  @MyDecorator()
  myMethod() {

  }
}

for (const item of MyDecorator) {
  // Target is the Prototype, name is the method name, descriptor the method descriptor, and args the arguments informed into the decorator
  doABarrelRoll(item.target, item.name, item.descriptor, item.args);
}
```

Property decorators:

```ts
const MyDecorator = createPropertyDecorator();
class MyClass {
  @MyDecorator()
  myProperty: string;
}

for (const item of MyDecorator) {
  // Target is the Prototype, name is the property name, and args the arguments informed into the decorator
  doABarrelRoll(item.target, item.name, item.args);
}
```

And parameters decorators:

```ts
const MyDecorator = createParameterDecorator();
class MyClass {
  myMethod(@MyDecorator() arg: string) {}
}

for (const item of MyDecorator) {
  // Target is the Prototype, name is the method name, index the parameter index, and args the arguments informed into the decorator
  doABarrelRoll(item.target, item.name, item.index, item.args);
}
```

If you want to create a decorator that receives parameters, you can inform it in it's creation through a function template:

```ts
// It works with every type of decorator
const MyDecorator = createMethodDecorator<(value: number, name: string) => void>();
```

You can also inform a callback to be called at every decorator appliance
```ts
const MyDecorator = createMethodDecorator((item) => {
  console.log(item.name);
})
```

This package also provides a helper function if you want to apply some modification into a class. This is useful to apply in the callback of the decorator:
```ts
wrapClass(item.target, (self: SomeClassExtended, a: string, b: number) => {
  self.c = a + b;
})
```

There is a helper function too so you can wrap methods. This function will directly replace a method on the prototype or the instance, whenever is provided:

```ts
// Replaces the method prototype
wrapMethod(SomeClass.prototype, 'method', (previousVersion, paramsOfTheMethod) => previousVersion(paramsOfTheMethod) + 2);
// Replaces just the instance method
wrapMethod(instance, 'method', (previousVersion, paramsOfTheMethod) => previousVersion(paramsOfTheMethod) + 3);
```



## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
