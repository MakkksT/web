var buttons = document.querySelectorAll(".but");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var prevButton = document.querySelector(".but.animate");
    if (prevButton) {
      prevButton.classList.remove("animate"); // Удалить класс "animate" с предыдущей кнопки
    }
    this.classList.add("animate"); // Добавить класс "animate" к нажатой кнопке
    //  disableAnimation(buttons, this);
  });
}

function disableAnimation(buttons, activeButton) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i] !== activeButton) { // Отключение анимации для остальных кнопок
      buttons[i].style.animation = "none";
    }
}
}

  setTimeout(function() {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] !== activeButton) {
        buttons[i].style.animation = ""; // Включение анимации обратно после небольшой задержки
      }
    }
  }, 0); // Задержка в 500 миллисекунд (можно изменить значение по вашему усмотрению)

