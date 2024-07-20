// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0
let count = 1 
let number = 20

while (count <= 20){
    // console.log(count);
        sum = sum + count;
        count++;
    if (count > 20){
        break;
    }
}
console.log(sum);  

