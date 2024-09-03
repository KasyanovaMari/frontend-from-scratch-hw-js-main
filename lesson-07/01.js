/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// const capitalizeWords = (sentence) => {
  // let str = sentence.split(" ");
  // //В первой строке функции `sentence.split(" ")` разбивает входную строку на массив слов. Разделителем служит пробел.
  // for (let i = 0; i < str.length; i++) {
  //   // Внутри цикла первое буква каждого слова `str[i][0].toUpperCase()` преобразуется в заглавную, и к ней добавляется оставшаяся часть слова `str[i].substring(1)`, начиная с индекса 1.
  //   str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  //   }
  //   return str.join(" "); //После завершения цикла массив слов `str` соединяется обратно в строку с помощью `str.join(" ")` и возвращается как результат функции.
  // }
  // console.log(capitalizeWords("hello world from javascript"));

const capitalizeWords = (sentence) => {
  let str = sentence.split(" ");
  str = str.map(word => word[0].toUpperCase() + word.substring(1));
  return str.join(" ");
}

console.log(capitalizeWords("hello world from javascript"));

