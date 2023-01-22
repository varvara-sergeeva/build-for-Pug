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





//const quantityProducts = document.querySelectorAll('.quantity-product');

//if (quantityProducts) {
//	quantityProducts.forEach(quantityProduct => {
//		quantityProduct.addEventListener('click', e => {
//			const target = e.target;

//			if (target.closest('.quantity-product__button')) {
//				let value = parseInt(target.closest('.quantity-product').querySelector('input').value);

//				if (target.classList.contains('quantity-product__plus')) {
//					value++;
//				} else {
//					--value;
//				}

//				if (value <= 0) {
//					value = 0;
//					target.closest('.quantity-product').querySelector('.counter__button_minus').classList.add('disabled')
//				} else {
//					target.closest('.quantity-product').querySelector('.counter__button_minus').classList.remove('disabled')
//				}

//				target.closest('.quantity-product').querySelector('input').value = value;
//			}
//		})
//	})
//}