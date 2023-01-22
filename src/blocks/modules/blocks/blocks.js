document.addEventListener("DOMContentLoaded", function () {

	var fullCurrentDate;

	function addZero(z) {
		return (z < 10) ? '0' + z : z;
	};

	const Months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]

	function getCurrentDate(t) {
		let year = t.getFullYear();
		let month = Months[t.getMonth()];
		let day = addZero(t.getDate());
		console.log(day, month, year);
		fullCurrentDate = day + " " + month + " " + year;
	};

	console.log(getCurrentDate(new Date()));

	document.getElementById('dateOutput').innerHTML = fullCurrentDate;


	//- СЧЕТЧИК ДЛЯ карточек товара

	const quantityProducts = document.querySelectorAll('.quantity-product');
	const cartButtons = document.querySelectorAll('.product-card__cart-btn');

	if (cartButtons) {
		cartButtons.forEach(cartButton => {
			cartButton.addEventListener("click", e => {
				cartButton.style.visibility = 'hidden';
			})
		})
	}

	if (quantityProducts) {
		quantityProducts.forEach(quantityProduct => {
			quantityProduct.addEventListener("click", e => {
				const target = e.target;
				const targetButton = quantityProduct.previousElementSibling;

				//- событие пихаем в переменную, а потом выясняем что за событие произошло
				if (target.closest(".quantity-product__button")) {
					//- находим значение инпута
					let value = parseInt(target.closest(".quantity-product").querySelector("input").value);
					//- если жмем на плюс, то увеличиваем значение, если нет, то вычитаем значение СОДЕРЖИТ БЕЗ ТОЧКИ
					if (target.classList.contains("quantity-product__plus")) {
						value++;
					} else {
						--value;
					}
					//- ограничиваем значения в меньшую и большую сторону
					if (value <= 0) {
						value = 0;
						targetButton.style.visibility = 'visible';
					}
					if (value >= 10) {
						value = 10;
					}

					//- вписываем в инпут значение
					target.closest(".quantity-product").querySelector("input").value = value;
				}
			})
		})
	}
});