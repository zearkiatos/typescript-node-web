function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

const checkValidPokemonId = (): Function => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 1000) {
        return console.error("The Pókemon id most to be between 1 and 1000");
      } else {
        originalMethod(id);
      }
    };
  };
};

const readOnly = (isWritable: boolean = true): Function => {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {},
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
};
export {
  printToConsole,
  printToConsoleConditional,
  blockPrototype,
  checkValidPokemonId,
  readOnly,
};
