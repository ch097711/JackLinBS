//數字加 +""可以變字串
const x = 20;
console.log(x);
console.log(typeof (x));
const y = 20 + "";
console.log(y);
console.log(typeof (y));

//fill 可以填滿字串
var arr = Array(5);
console.log(arr);
var arr = Array(5).fill("");
console.log(arr);
var arr = Array(5).fill("x");
console.log(arr);

//Array.from
var users = ["jack", "123", "jack", "build", "school", "anna", "anna"];
var unique = Array.from(new Set(users));
console.log(unique);//刪除Array的重複直
function f() {
    return Array.from(arguments);
}
console.log(f(1, 2, 3)) // [1, 2, 3]
// 使用箭頭函式作為 map 函式來
// 操作元素
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// 產生數值序列
// 因為陣列中的每個位置都會被初始化為 `undefined`，
// 下方 `v` 會是 `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

//Dynamic Objects
const dynamic = "hobbies";
var user = {
    name: "jack",
    email: "ch097711@gmail.com",
    [dynamic]: "sleep"
};
console.log(user);

//slice
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.length = 3;
console.log(arr);//[ 1, 2, 3 ]
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.slice(-3));//[ 6, 7, 8 ]
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.slice(1, 3));//[ 2, 3 ]

//array to object
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var arrObject = { ...arr };
console.log(arrObject);


//object  to array
var user = {
    name: "jack",
    email: "ch097711@gmail.com",
    hobbies: "sleep"
};
var userArray = Object.keys(user);
console.log(userArray);
var userArray = Object.values(user);
console.log(userArray);

//Performance
//用瀏覽器console
var startAt = performance.now();
for (let i = 0; i < 1000; i++) {
    console.log(i);
}
var endAt = performance.now();
console.log(`${endAt - startAt} took milliseconds to excute`);



//馬上執行的function 立即函式 (IIFE )
//IIFE轉換為 expression 形式，並且馬上執行，function scope 內的變數在外面是無法存取的（避免變數污染）
(function hi() {
    console.log('hieeee');
})();
console.log('hieee again');
//hi();//not defined

(function (name) {
    return console.log('Hello' + name)
})('Iris') // 立即呼叫

//使用IIFE避免變數互相污染
//若想要更改IFFE外的變數，代入即可
//瀏覽器執行
var greeting = 'Hola';
(function (global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello' //讓Hola變成Hello
    console.log(greeting + '' + name)
})(window, 'Iris') //取用全域中的變數，並代入IIFE中來更改全域變數
console.log(greeting) // Hello