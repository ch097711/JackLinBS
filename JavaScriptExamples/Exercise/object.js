var car = new Object;
car.name = "toyota";
car.price = 2000;
car.speed = 200;
car.speedup = function () {
    this.speed = this.speed + 20;
};
car.report = function () {
    console.log(`carname : ${car.name} , carprice :${car.price}, carspeed:, ${car.speed}`);
};
car.speedup();
car.report();



//建構式
function car(name, price) {
    this.name = name;
    this.price = price;
    this.speed = 200;
    this.speedup = function () {
        this.speed = this.speed + 20;
    };
    this.report = function () {
        console.log(`carname : ${this.name} , carprice :${this.price}, carspeed:, ${this.speed}`);
    };
}
var car1 = new car("toyota", 2333);
car1.speedup();
car1.report();


var car2 = new car("bmw", 222233);
car2.speedup();
car2.report();


function change() {
    var span = document.getElementById("ad");
    span.style.fontWeight
}
