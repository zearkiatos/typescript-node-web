const printObject = (argument: any): void => {
  console.log(argument);
};

function genericFunction<T>(argument: T): T {
  return argument;
}

const genericArrowFunction = <T>(argument: T): T => argument;

export { printObject, genericFunction, genericArrowFunction };
