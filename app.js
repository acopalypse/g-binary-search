function binarySearch(number, index, step, side) {
  if (step > 6 || number < 2) {
    document.getElementById("error").innerHTML = `
      <p>
        Что то пошло не так...<br> Кол-во шагов не может превышать 7.
        И число не должно быть меньше 1.
      </p>
    `;
    document.getElementById("inner").innerHTML = `
      <div class="buttons">
        <button onclick="binarySearch(100, 100, 0, 0)">Повторить</button>
      </div>
    `;
  } else {
    if (side) {
      index = Math.floor(index / 2);
    } else {
      index = Math.ceil(index / 2);
    }
    number -= index;
    step += 1;
    document.getElementById("inner").innerHTML = `
    <p>Шаг ${step}</p>
    <p>Число ${number}</p>
    <div class="buttons">
      <button onclick="binarySearch(${number}, ${index}, ${step}, 0)"> < Меньше</button>
      <button onclick="binarySearchEnd(${number}, ${step})">Угадал!</button>
      <button onclick="binarySearch(${
        number + index
      }, ${index}, ${step}, 1)">Больше > </button>
    </div>`;
    document.getElementById("error").innerHTML = "";
  }
}

function binarySearchEnd(num, step) {
  document.getElementById("inner").innerHTML = `
  <p>Загаданное число ${num} стало известно спустя ${step} шаг(а, ов)</p>
  <div class="buttons">
    <button onclick="binarySearch(100, 100, 0, 0)">Повторить</button>
  </div>`;
}
