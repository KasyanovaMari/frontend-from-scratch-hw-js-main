/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/
//  Функция `truncate` принимает два параметра: `str` (строка, которую нужно обрезать) и `maxLength` (максимальная длина строки, после которой она будет укорочена).

function truncate(str, maxLength) {
if (str.length <= maxLength) {
    return str;
    } else {
    return str.slice(0, maxLength) + '...';
  }
}
console.log(truncate("Вот, что мне действительно нравится в этом", 20));

