function binarySearch(number, index, step) {
  if (number == 100 && step == 7) {
    binarySearchEnd(100, 8, 1);
  } else if (step > 6 || number < 2) {
    document.getElementById("error").innerHTML = `
      <p>
        Что то пошло не так...<br> Кол-во шагов не может превышать 7.
        И число не должно быть меньше 1.
      </p>
    `;
    document.getElementById("inner").innerHTML = `
      <div class="buttons">
        <button onclick="binarySearch(100, 100, 0)">Повторить</button>
      </div>
    `;
  } else {
    index = Math.ceil(index / 2);
    number -= index;
    step += 1;
    document.getElementById("inner").innerHTML = `
    <p>Шаг ${step}</p>
    <p>Число ${number}</p>
    <div class="buttons">
      <button onclick="binarySearch(${number}, ${index}, ${step})"> < Меньше</button>
      <button onclick="binarySearchEnd(${number}, ${step}, 0)">Угадал!</button>
      <button onclick="binarySearch(${
        number + index
      }, ${index}, ${step})">Больше > </button>
    </div>`;
    document.getElementById("error").innerHTML = "";
  }
}

function binarySearchEnd(num, step, err) {
  document.getElementById("inner").innerHTML = `
  <p>Загаданное число ${num} стало известно спустя ${step} шаг(а, ов)</p>
  <div class="buttons">
    <button onclick="binarySearch(100, 100, 0)">Повторить</button>
  </div>`;
  if (err == 1) {
    document.getElementById("error").innerHTML = `
      <p>
        PS. Я так и не допер, как выполнить поиск 100 за 7 шагов :)
      </p>
    `;
  }
}
