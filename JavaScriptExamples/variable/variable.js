console.log(typeof x)
console.log(x === undefined);
var x = 5;

var product = "iphone";
(function () {
    console.log(product);
    var product = "android";
})();
console.log(product);


displayName();
/**Function declaration are hoisted*/
function displayName() {
    console.log("Kevin");
}
showName();
/**Function expression - not hoisting */
var showName = function () {
    console.log("David");
}

var book = "JavaScript";
console.log(book);
//window為global object
console.log(window.book);
window.book = "ASP.NET MVC 5";
console.log(book);