let y=prompt("2. Определим, является ли число простым?");
function simpleNumber (b) {
    b=+b;
    if (b<=1 || b>1000 ) {
       console.log("Данные неверны")
    }
    else {
        for (let i=2; i<=b/2; i++) {
                if (b%i==0) {
                    return console.log ("Данные неверны")
                }
        }
        console.log(`${b} - простое число`)
    };
}
simpleNumber(y);