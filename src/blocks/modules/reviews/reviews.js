document.addEventListener("DOMContentLoaded", function () {
	const swiper3 = new Swiper('.reviews__slider.swiper', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		//pagination: {
		//	el: '.swiper-pagination',
		//	type: 'progressbar',
		//},
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});
});