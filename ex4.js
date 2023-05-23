let e=+prompt("4.1 Введите первое число");
let f=+prompt("4.2 Введите второе число");
setInterval (funcStr, 1000, e, f);
function funcStr(a, b) {
    for (i=a; i<=b; i++) {
        i=i++;
        console.log(i);
    }   
};