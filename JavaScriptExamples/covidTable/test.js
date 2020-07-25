// //全球肺炎統計表
// let title = document.querySelector("h1");
// title.innerText = "全球肺炎統計表";
//建立Virus資料，傳入Table中
var Country = ['Taiwan', 'China', 'American']
var Taiwan = ['458', '400', '7'];
var China = ['85,921', '80,519', '4653'];
var American = ['4,106,615', '1,226,670', '146,419'];
var Total = [];

var TaiwanList = [1, 2, 3, 4];
// var x = 2;
// var country = Country[x];
// var str = country + '[x]';
// console.log(eval(str));
for (var i = 0; i < 4; i++) {
    var x = 1;
    var country = Country[i];
    for (var a = 0; a < 4; a++) {
        eval(country + '[x]' + '=' + country + '[i]');
        x++;
    }
}

var form = document.order;

for (var i = 1; i <= 3; i++) {

    eval('form.T' + i + '.value=form.Q' + i + '.value(form.P' + i + '.value');
}