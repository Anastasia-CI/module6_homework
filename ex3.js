let c=+prompt("3.1 Введите первое число");
let z=+prompt("3.2 Введите второе число");
function funcSum(e) {
    return function insideSum(f) {
        return e+f;
    };
};
const result=funcSum(c)(z);
console.log(`Сумма чисел =${result}`);