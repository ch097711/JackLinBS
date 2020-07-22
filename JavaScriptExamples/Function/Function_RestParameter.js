const print = function (...Args) {
    console.log(typeof Args);
    console.log(Args instanceof Array);
    console.log(Args[0]);
    console.log(Args[1]);
    console.log(Args[2]);
    console.log(Args.join());
}
print("昔⼈已乘黃鶴去"
    ,
    "此地空餘黃鶴樓"
    ,
    "黃鶴⼀去不復返"
    ,
    "雲千載空悠悠");

//總和 
function sum(...Args) {
    let sum = Args.reduce((total, current) => {
        return total + current;
    });
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));