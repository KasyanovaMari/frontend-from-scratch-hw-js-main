/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  return typeof str === 'string' && str.trim() !== '' && !isNaN(Number(str))
}
 // Проверяем, является ли str строкой
  // `typeof str === 'string'` возвращает true, если str - строка.
  // `str.trim() !== ''` убирает пробелы в начале и конце строки и проверяет, что строка не пустая.
  // `!isNaN(Number(str))` проверяет, можно ли преобразовать строку в число.
  
console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
