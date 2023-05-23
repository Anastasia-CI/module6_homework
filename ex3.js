let c=+prompt("3.1 Введите первое число");
let z=+prompt("3.2 Введите второе число");
function mainFunc(c, func) {
    func(z);
};
function funcSum(z) {
    return console.log(`Сумма чисел =${c+z}`);
}
mainFunc(c, funcSum);