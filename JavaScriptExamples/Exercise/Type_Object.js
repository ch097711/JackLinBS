var obj = new Object();
var object = {};
var person = {
    name: "Jack",
    email: "ch097711@gmail.com",
    phone: "0912-345678"
}
console.log(`${person.name}  , ${person.email} , ${person.phone}`);

console.log(`${person["name"]}, ${person["email"]},${person["phone"]}`);


var employee = {
    name: "Kevin",
    email: "kevin@gmail.com",
    title: "Developer",
    phone: {
        home: "(03)366-4946",
        office: "(03)342-5178",
        mobile: "0922-155342"
    }
}
console.log(employee.phone.home +
    "," +
    employee['phone']['mobile']);