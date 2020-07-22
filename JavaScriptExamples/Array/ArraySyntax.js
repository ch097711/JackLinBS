var array1 = [];
var array2 = new Array();
var array3 = new Array(10);

var Computer = ['CPU', 'DRAM', 'SSD', 'Mouse'];
var comProducts = [
    ['CPU', 'DRAM', 'SSD', 'Mouse'],
    ['BMW', 'Benz', 'Audi', 'Lexus'],
    ['Apple', 'Banana', 'Cherry']
];

var comp = new Array('CPU', 'DRAM', 'SSD');

var car = ['BMW', 'AUDI', 'BENZ', 'LEXUS'];
for (var i = 0; i < car.length; i++) {
    console.log(car[i]);
}

for (const element of car) {
    console.log(element);
}

car.forEach(function (item, index, array) {
    console.log(index, item, array)
})



var Computer = ['CPU', 'DRAM', 'SSD', 'Mouse'];
var comp = new Array('CPU', 'DRAM', 'SSD', 'Mouse');
var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];

// console.log(Computer.concat(Cars));
// console.log([...Computer, ...Cars]);
// Computer.push.apply(Computer, Cars);
// console.log(Computer);
console.log(Cars.find(c => c == 'Audi'));
console.log(Cars.indexOf('Benz'));
console.log(Prices.filter(c => c > 300));
console.log(Prices.reduce((a, b) => a + b))
console.log(Prices.map(c => { if (c > 300) return c; }));