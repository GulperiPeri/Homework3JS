// 1.Напишите функцию, которая может преобразовывать строку в число - 10 баллов

"use strict";
function myStr(str1) {
  if (typeof str1 === "string") {
    let result = parseInt(str1);
    console.log(result);
  } else {
    console.log(str1);
  }
}
myStr("456");
