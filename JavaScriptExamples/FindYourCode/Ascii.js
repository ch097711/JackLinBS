//Ex
// for (let i = 0; i < 255; i++) {
//     console.log(i + "," + String.fromCharCode(i));
// }

function getCharCode(char) {
    for (let i = 0; i < 65536; i++) {
        if (String.fromCharCode(i) == char) {
            return i;
        }
    }
}
console.log(getCharCode("林"), String.fromCharCode(getCharCode("林")));
console.log(getCharCode("祐"), String.fromCharCode(getCharCode("祐")));
console.log(getCharCode("清"), String.fromCharCode(getCharCode("清")));


var x = 0;
function fullCharCode(name) {
    for (let i = 0; i < 65536; i++) {
        if (String.fromCharCode(i) == name.charAt(x)) {
            x++;
            return i;
        }
    }
}
console.log(fullCharCode("林祐清"));