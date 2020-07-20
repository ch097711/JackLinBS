function displayName() {
    var name = "Kevin";
    var name = "David"; //var 可以重複宣告
    let age = 35;
    // let age = 24;
    const height = 175;
    // const height = 168;
    console.log(name);
    console.log(age);
    console.log(height);
}
displayName();




//var , let, const在function內外
var x = 1; //global
let y = 2; //global
const z = 3; //global
function Calc() {
    var x = 'JavaScript'; //block scope, local
    let y = 'CSS'; //block scope, local
    const z = 'HTML'; //block scope, local
    console.log(x);//JavaScript
    console.log(y);//CSS
    console.log(z);//HTML
    console.log('.'.repeat(60));
}
Calc();
console.log(x);//1
console.log(y);//2
console.log(z);//3



//Block Statement區塊陳述式
var x = 1; //global
let y = 2; //global
const z = 3; //global
{
    var x = 'JavaScript'; //No block scope, global
    let y = 'CSS'; //block scope, local
    const z = 'HTML'; //block scope, local
    console.log(x);
    console.log(y);
    console.log(z);
    console.log('.'.repeat(60));
}
console.log(x);
console.log(y);
console.log(z);