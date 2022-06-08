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
export { printToConsole, printToConsoleConditional, blockPrototype };
