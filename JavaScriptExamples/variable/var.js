//Ex1
var x = 1; //全域空間 全域變數
var x;
function init() {
    var x = 0; //區域空間 區域變數
    console.log(x);
}
init();//0
console.log(x); //1

//Ex2
var x = 1;
var x;
function init() {
    x = 0;
    console.log(x);
}
init();//0
console.log(x); //0


//Ex3
var x = 1;
{
    var x = 3;
    function setValue() {
        var x = 5;
        console.log(x);
    }
    console.log(x); //3
}
setValue();//5
console.log(x);//3


//Ex4
var x = 1;
var x;
n = 5;
function init() {
    var x = 0;
    var y = 2;
    var z = 3;
    n = -1;
    console.log(x);
}
init();//0
console.log(x);//1
console.log(y);//not defined
console.log(z);//not defined
console.log(n);//-1