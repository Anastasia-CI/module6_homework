[1, 4, 2, 6, 7, 9, 12, 11, 0, 0, 0, ""];
let arrZ=prompt("Введите последовательность элементов через запятую(,):");
let Even=0;
let Odd=0;
let Zero=0;
let Other=0;
function numberOfItems(arrayX) {
  arrayX=arrayX.split(",");
  for (let i=0; i<arrayX.length; i++) {
    arrayX[i]=+arrayX[i];
    if ((typeof (arrayX[i])=="number")&&(!Number.isNaN(arrayX[i]))) {
      if (arrayX[i]=== 0) { 
      Zero++;
      }
      else if  (arrayX[i]%2 === 0) { 
      Even++;
      }
      else if (arrayX[i]%2 !==0) { 
      Odd++;
      } 
    }
  }
  Other=arrayX.length-Zero-Even-Odd;
  console.log(`Вы ввели: ${arrayX}`);
  console.log(`Общее количество элементов: ${arrayX.length}`);
  console.log(`Количество четных элементов: ${Even}`);
  console.log(`Количество нечетных элементов: ${Odd}`);
  console.log(`Количество 0: ${Zero}`);
  console.log(`Количество других элементов: ${Other}`);
};
numberOfItems(arrZ);
