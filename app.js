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
  <p class="error">
    Что то пошло не так...
    <br>Кол-во шагов не может превышать 7.
  </p>
  <div class="buttons">
    <button onclick="binarySearch(0, 100, 1)">Повторить</button>
  </div>`;
}
