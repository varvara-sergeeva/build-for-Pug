document.addEventListener("DOMContentLoaded", function () {
  const cardButtons = document.querySelectorAll('.card-front__button');
  const cards = document.querySelectorAll('.card');

  for (let cardBtn of cardButtons) {
    cardBtn.addEventListener("click", function (e) {
      e.preventDefault();
      for (let card of cards) {
        card.classList.remove('active');
        console.log('removed')
      };
      // создаем переменную для текущей кнопки
      const currentButton = cardBtn.dataset.filter;
      activeAnimationCard(currentButton, cards);
    })
  }

  // функция по соответствию
  function activeAnimationCard(pair, items) {
    items.forEach((item) => {
      const isItemIncorrect = !item.classList.contains(pair);
      if (isItemIncorrect) {
        item.classList.remove('active')
        console.log('removed class active')
      } else {
        item.classList.toggle('active')
      }
    })
  }

});