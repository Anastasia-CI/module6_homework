let a = prompt("1. Определим, число четное или нечетное?");
function numberType(x) {
    x=+x;
    if (Number.isNaN(x)) {
  console.log(`${x} - упс, кажется, вы ошиблись`)
  }
    else if (x==0) {
     console.log("0")
    }
    else if (x%2 === 0) { 
    console.log(`${x} - четное число`)
    }
    else if (x%2 !== 0) {
    console.log(`${x} - нечетное число`)
    }
};
numberType(a);
