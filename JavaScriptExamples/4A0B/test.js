var randomList = [];
function random() {
    var arr = [];
    var json = {};
    while (arr.length < 4) {
        var k = Math.floor(Math.random() * 10);
        if (!json[k]) {
            json[k] = true;
            arr.push(k);
        };

    };
    randomList = arr;
};
random();
console.log(randomList);
random();
console.log(randomList);
random();
console.log(randomList);




var arr = [];
var json = {};
while (arr.length < 4) {
    var k = Math.floor(Math.random() * 10);
    if (!json[k]) {
        json[k] = true;
        arr.push(k);
    };
};
console.log(arr)



var inputNum = [1, 2, 3, 4];
var randomList = [4, 3, 2, 1];
console.log(inputNum[4])
var a = 0;
var b = 0;
for (var i = 0; i < 4; i++) {
    for (var q = 0; q < 4; q++) {
        if (inputNum[i] == randomList[q] && i == q) {
            a++;
        }
        else if (inputNum[i] == randomList[q] && i != q) {
            b++;
        }
    }
}
console.log(`${a}A${b}B`);