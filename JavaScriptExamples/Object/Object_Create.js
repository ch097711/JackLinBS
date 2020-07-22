var person = {
    name: 'Jack',
    age: 24,
    height: 182,
    weight: 78,
    phone: {
        mobile: '0912456789',
        hoem: '02-12345678',
    },
    friends: ['bill', 'gary'],
    bmi: function () {
        return this.weight / ((this.height / 100) ** 2);
    }
};
console.log(person);
console.log(person.bmi());
console.log(person.phone.mobile);
console.log(person.friends[1]);


delete person.age;
delete person.phone.hoem;
person.phone.mobile = '123123124';



console.log(person);



