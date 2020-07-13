console.log(Boolean(1));//true
console.log(Boolean(0));//false

console.log(1 == true);//true 
console.log(1 === true);//false 

console.log(1 == "1");//true ,自動轉型
console.log(1 === "1");//false ,三等號 比較DataType 無轉型

var person = null; person;
var person; person;


function checkValue(value) {
    if (value === undefined) {
        return 'undefined value!未定義的值';
    }
    return '傳入值為：' + value;
}
let name;
let nickname = 'super man';
console.log(checkValue(name));


var name1 = 'Kevin';  // Literal string
console.log(`Your name is ${name1}`);
var name2 = new String("Kevin") //String object 
console.log(`Your name is ${name2}`);


let longString1 = "天地⽞黃，宇宙洪荒，⽇⽉盈昃，" +
    "辰宿列張，寒來暑往，秋收冬藏，" +
    "閏餘成歲，律呂調陽，雲騰致雨，";
console.log(longString1);
//反斜線後⾯不能有任何空⽩或其他字元，甚⾄是縮排
let longString2 = "天地⽞黃，宇宙洪荒，⽇⽉盈昃\
    辰宿列張，寒來暑往，秋收冬藏，\
    閏餘成歲，律呂調陽，雲騰致雨，";
console.log(longString2);

for (var i = 0; i < longString1.length; i++) {
    console.log(longString1.charAt(i));
}
for (var i = 0; i < longString1.length; i++) {
    console.log(longString1[i]);
}

//padStart() , padEnd
const age = '3';
console.log(age.padStart(3, '0'));
console.log(age.padEnd(3, '0'));

let Sym1 = Symbol("Sym");
let Sym2 = Symbol("Sym");
console.log(Sym1 == Sym2);//false
console.log(Sym1 === Sym2);//false
console.log(typeof Sym1);//symbol
console.log(Sym1.toString()); //Symbol(Sym)