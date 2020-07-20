for (var i = 0; i < 3; i++) {
    console.log(i)//0 1 2
}
console.log(i);// 3
//let
for (let i = 0; i < 3; i++) {
    console.log(i)//0 1 2
}
console.log(i);//  3


function loop1() {
    for (var i = 0; i < 3; i++) {
        console.log(i)
    }
    console.log(i);
}
function loop2() {
    for (let i = 0; i < 3; i++) {
        console.log(i)
    }
    console.log(i);
}
loop1();
loop2();



//Ex1 - var
var lady = 'Rose';
{
    var lady = 'Mary';
    console.log(lady);
}
console.log(lady);



//Ex2 - let
let name = 'Kevin';
{
    let name = 'David';
    console.log(name);
}
console.log(name); 