// function binarySearch(number, index, step, side) {
//   if (step > 6 || number < 2) {
//     document.getElementById("error").innerHTML = `
//       <p>
//         Что то пошло не так...
//         <br>Кол-во шагов не может превышать 7.
//         <br>И число не должно быть меньше 1.
//       </p>
//     `;
//     document.getElementById("inner").innerHTML = `
//       <div class="buttons">
//         <button onclick="binarySearch(100, 100, 0, 0)">Повторить</button>
//       </div>
//     `;
//   } else {
//     side == 1
//       ? (index = Math.floor(index / 2))
//       : (index = Math.ceil(index / 2));
//     step += 1;
//     document.getElementById("inner").innerHTML = `
//     <p>Шаг ${step}</p>
//     <p>Число ${number - index}</p>
//     <div class="buttons">
//       <button onclick="binarySearch(${
//         number - index
//       }, ${index}, ${step}, 0)"> < Меньше</button>
//       <button onclick="binarySearchEnd(${
//         number - index
//       }, ${step})">Угадал!</button>
//       <button onclick="binarySearch(${number}, ${index}, ${step}, 1)">Больше > </button>
//     </div>`;
//     document.getElementById("error").innerHTML = "";
//   }
// }

// function binarySearchEnd(num, step) {
//   document.getElementById("inner").innerHTML = `
//   <p>Загаданное число ${num} стало известно спустя ${step} шаг(а, ов)</p>
//   <div class="buttons">
//     <button onclick="binarySearch(100, 100, 0, 0)">Повторить</button>
//   </div>`;
// }

function binarySearch(start, end, step) {
  let result = Math.ceil((start + end) / 2);
  document.getElementById("inner").innerHTML = `
  <p>Шаг: ${step}</p>
  <p>Число: ${result}</p>
  <div class="buttons">
    <button onclick="binarySearchInner(${start}, ${end}, ${step}, true)"> < Меньше</button>
    <button onclick="binarySearchEnd(${result}, ${step})">Угадал!</button>
    <button onclick="binarySearchInner(${start}, ${end}, ${step}, false)">Больше > </button>
  </div>
  `;
}
function binarySearchInner(start, end, step, status) {
  index = Math.ceil((start + end) / 2);
  status ? (end = index) : (start = index);
  step += 1;
  if (step > 7) {
    binarySearchErr();
  } else {
    binarySearch(start, end, step);
  }
}
function binarySearchEnd(result, step) {
  document.getElementById("inner").innerHTML = `
  <p>Загаданное число ${result} стало известно спустя ${step} шаг(а, ов)</p>
  <div class="buttons">
    <button onclick="binarySearch(0, 100, 1)">Повторить</button>
  </div>`;
}
function binarySearchErr() {
  document.getElementById("inner").innerHTML = `
  <p>
    Что то пошло не так...
    <br>Кол-во шагов не может превышать 7.
  </p>
  <div class="buttons">
    <button onclick="binarySearch(0, 100, 1)">Повторить</button>
  </div>`;
}
