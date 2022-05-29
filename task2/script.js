//2.Напишите функцию, которая проверяет число четное или не четное: если четное
//возвращает true иначе false - 10 баллов

"use strict";
function digit(n) {
  if (n % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
digit(76);
