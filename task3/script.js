//3.Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом //или нет. Функция первым параметром должна принимать текст элемента, а вторым -
//массив, в котором делается поиск. Функция должна возвращать true или false - 10   //баллов

"use strict";

function findElement(banana, fruits = ["peach", "apple", "banana", "orange"]) {
  console.log(["peach", "apple", "banana", "orange"].includes("banana"));
}
findElement();
