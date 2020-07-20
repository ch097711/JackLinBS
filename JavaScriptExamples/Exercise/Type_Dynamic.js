var age = 35;
age = "Really ?";
age = false;
console.log(age); //false
console.log(typeof age); //boolean

//EX
function Add(x, y) {
  return x + y;
}
console.log(Add(3, 8)); //11
console.log(Add("3", 8)); //38
console.log(Add("3", "8")); //38


console.log("1" == 1); //true  自動轉型
console.log("1" === 1); //false  直接比較型別



//⽤指令將string轉型成number
const pi = "3.1415962";
console.log(pi + 7);  //3.14159627
console.log(parseInt(pi) + 7);  //10      parseInt()轉成整數
console.log(parseFloat(pi) + 7);   //10.1415962   parseFloat()轉成浮點數


//String to Number
Number("123") // 123
Number("12.3") // 12.3
Number("") // 0
Number("0x11") // 17
Number("0b11") // 3
Number("0o11") // 9
Number("foo") // NaN
Number("100a") // NaN


//parseInt()和parseFloat()精度


function circle(r) {
  return parseFloat(r) * Math.PI * 2.0;
}
console.log(circle(5.138));
//32.28300610828872
const circleArea = function (r) {
  return parseInt(r) * Math.PI * 2;
}
console.log(circleArea(5.138));
//31.41592653589793


//Number to String
const pi = 3.1415962; //Number
const ps = pi.toString(); //String
const piString = String(pi); //String


var x = 1;
/*
var : 宣告的變數，可為global或local(視宣告處⽽定)，
可選擇性設定值初始值
*/
let y = 2;
/*
let：宣告的變數，可為global或local(視宣告處⽽定)，
有block-scoped範圍效應，可選擇性設定值初始值
*/
const z = 3;
/*
const：宣告的常數，可為global或local(視宣告處⽽
定)，有block-scoped範圍效應，必須指定初始值
*/

//block scope 區塊範圍
{
  var x = 3;
  let y = 6;
  const z = 9;
  console.log(x);//3
  console.log(y);//6
  console.log(z);//9
}

console.log(x); //3
console.log(y); //2
console.log(z); //3

