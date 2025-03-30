const assert = require('assert');
const { execSync } = require('child_process');

const runAppWithInput = (input) => {
  try {
    const command = input === '' ? 'node app.js' : `node app.js ${input}`;
    const output = execSync(command).toString();
    return output;
  } catch (error) {
    return error.stdout.toString();
  }
}

const testApp = () => {
  console.log('Запуск тестов...\n');

  console.log('Тест 1: Проверка умножения целого числа (5)');
  const output1 = runAppWithInput('5');
  assert.ok(output1.includes('Умноженное на 2: 10'), 'Тест 1 не пройден');
  assert.ok(output1.includes('Умноженное на 3: 15'), 'Тест 1 не пройден');
  assert.ok(output1.includes('Умноженное на 5: 25'), 'Тест 1 не пройден');
  console.log('Тест 1 пройден\n');

  console.log('Тест 2: Проверка умножения дробного числа (2.5)');
  const output2 = runAppWithInput('2.5');
  assert.ok(output2.includes('Умноженное на 2: 5'), 'Тест 2 не пройден');
  assert.ok(output2.includes('Умноженное на 3: 7.5'), 'Тест 2 не пройден');
  assert.ok(output2.includes('Умноженное на 5: 12.5'), 'Тест 2 не пройден');
  console.log('Тест 2 пройден\n');

  console.log('Тест 3: Проверка обработки отсутствия аргумента');
  const output3 = runAppWithInput('');
  assert.ok(output3.includes('Укажите число в качестве аргумента'), 'Тест 3 не пройден');
  console.log('Тест 3 пройден\n');

  console.log('Тест 4: Проверка обработки нечислового ввода ("abc")');
  const output4 = runAppWithInput('abc');
  assert.ok(output4.includes('Укажите корректное число'), 'Тест 4 не пройден');
  console.log('Тест 4 пройден\n');

  console.log('Все тесты успешно пройдены! 🎉');
}

testApp();
