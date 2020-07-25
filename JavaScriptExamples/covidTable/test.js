// //全球肺炎統計表
// let title = document.querySelector("h1");
// title.innerText = "全球肺炎統計表";
//建立Virus資料，傳入Table中
var Country = ['Taiwan', 'China', 'American'];
var Taiwan = ['458', '400', '7'];
var China = ['85,921', '80,519', '4653'];
var American = ['4,106,615', '1,226,670', '146,419'];
var Total = [];
Total[0] = parseInt(Taiwan[0].replace(/,/g, '')) + parseInt(China[0].replace(/,/g, '')) + parseInt(American[0].replace(/,/g, ''));
console.log(Total[0])
function thousands(num) {
    return num.toLocaleString();
}
console.log(thousands(Total[0]))



var TaiwanList = [1, 2, 3, 4];
var ChinaList = [];
var AmericanList = [];
// var x = 0;
// var country = Country[x];
// var str = country + '[x]';
// console.log(eval(Country[x] + 'List' + '[x]'));

// var x = 0;
// eval(`${Country[2]}List[x]=${Country[2]}[x]`);
// console.log(eval(`${Country[2]}List[x]`));


// console.log(eval(`${Country[x]}List[x]`));
for (var i = 0; i < 3; i++) {
    var x = 0;
    eval(`${Country[2]}List[i]=${Country[2]}[i]`);
    console.log(eval(`${Country[2]}List[i]`));
}

var form = document.order;

for (var i = 1; i <= 3; i++) {

    eval('form.T' + i + '.value=form.Q' + i + '.value(form.P' + i + '.value');
}

function showMessage(greeting, name, callback) {
    console.log('you call showMessage')
    callback(greeting, name)
}

showMessage('Hello!', 'Eddy', function (param1, param2) {
    console.log(param1 + ' ' + param2)
})

for (var i = 0; i < 5; i++) {

    // 為了凸顯差異，我們將傳入後的參數改名為 x
    // 當然由於 scope 的不同，要繼續在內部沿用 i 也是可以的。
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 1000 * x);
    })(i);
}


var msg = "global."

function outer() {
    var msg = "local."

    function inner() {
        return msg;
    }

    return inner;
}

var innerFunc = outer();
var result = innerFunc();

console.log(outer());    //  ?