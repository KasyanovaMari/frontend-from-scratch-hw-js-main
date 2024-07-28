/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/


/*
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
*/

let dice1 // первая кость
let dice2 // вторая кость
let isWinningDouble // переменная для проверки выигрыша

// dice1 = Math.floor(Math.random() * 6) + 1
// dice2 = Math.floor(Math.random() * 6) + 1
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
// Инициализируем переменную isWinningDouble как false
isWinningDouble = false;

while (!isWinningDouble) {
  dice1 = rollDice();
  dice2 = rollDice();
  console.log('Первый бросок: ' + dice1)
  console.log('Второй бросок: ' + dice2)

    // Используем оператор == для сравнения на равенство
  if (dice1 === dice2 && dice1 > 3) {
    isWinningDouble = true;
    console.log('Выигрышный дубль!')
  } else {
    console.log('Не выигрышный дубль.')
  }
}
