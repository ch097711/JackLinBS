//Ex 1
function RectArea(height, width) {
    return height * width;
}
console.log(RectArea(10, 9));





//ex 2  Function Expression表達式
var getRectArea = function (height, width) {
    return height * width;
}

const gotRectArea = (height, width) => { return height * width; }
console.log(gotRectArea(10, 9));


const FullName = (lastName, firstName) => { return `${lastName},${firstName}` }
console.log(FullName("jack", "lin"));




//Function Constructor建構式
const computeRectArea = new
    Function('height', 'width',
        'return height * width');
console.log(computeRectArea(9, 7));
console.log(computeRectArea.name);

const sum = new Function('x', 'y', '{return x + y}');
console.log(sum(8, 6));