var BMI = (height, weight) => {
    return weight / ((height / 100) ** 2);
}
console.log(BMI(182, 80));