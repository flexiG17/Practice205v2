const multiplyNumber = (num) => {
  if (isNaN(num)) {
    return "Укажите корректное число в качестве аргумента";
  }

  const number = parseFloat(num);
  return {
    originalNumber: number,
    multipliedBy2: number * 2,
    multipliedBy3: number * 3,
    multipliedBy5: number * 5
  };
}

const inputNumber = process.argv[2];

if (inputNumber === undefined) {
  console.log("Укажите число в качестве аргумента. Пример: node app.js 10");
  process.exit(0);
}

const result = multiplyNumber(inputNumber);
if (typeof result === 'string') {
  console.log(result);
} else {
  console.log(`Исходное число: ${result.originalNumber}`);
  console.log(`Умноженное на 2: ${result.multipliedBy2}`);
  console.log(`Умноженное на 3: ${result.multipliedBy3}`);
  console.log(`Умноженное на 5: ${result.multipliedBy5}`);
}
