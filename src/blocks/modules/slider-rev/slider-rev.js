document.addEventListener("DOMContentLoaded", function () {
	var revSlider = document.querySelector('.reviews__slider');
	var revWrap = document.querySelector('.reviews__wrapper');
	const slides = Array.from(revWrap.children);
	var revSlide = document.querySelectorAll('.reviews__item');
	const slideOne = document.getElementById("one");

	if (window.innerWidth > 998) {
		const prev = document.querySelector('.reviews__prev');
		const next = document.querySelector('.reviews__next');
		const slides = document.querySelectorAll('.reviews__item');
		let index = 0;

		const currentSlide = n => {
			for (let slide of slides) {
				slide.classList.remove('reviews__item--current');
			}
			slides[n].classList.add('reviews__item--current');
		}


		const nextSlide = () => {
			if (index == slides.length - 1) {
				index = 0;
				currentSlide(index);
			} else {
				index++;
				currentSlide(index);
			}
		}
		const prevSlide = () => {
			if (index == 0) {
				index = slides.length - 1;
				currentSlide(index);
			} else {
				index--;
				currentSlide(index);
			}
		}

		function chackSlide() {
			if (slideOne.classList.contains('reviews__item--current')) {
				console.log('One is current');
			} else {
				console.log('no');
			}
		}

		//slides[0].classList.remove('place--1');
		//slides[0].classList.add('place--4');
		//slides[3].classList.remove('place--4');
		//slides[3].classList.add('place--1');

		next.addEventListener('click', nextSlide, chackSlide());
		prev.addEventListener('click', prevSlide);



		function styles(item_id, x, y, z, opacity) {
			$(item_id).css({
				transform: 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) ',
				opacity: opacity,
			});
		}


		$('#prev').click(function () {
			$('#one').addClass('focus');
			$('#two').removeClass('focus');
			$('#three').removeClass('focus');

			styles('#first', 0, 0, 0, 1, );
			styles('#second', 70, -80, -50, 0.6, );
			styles('#third', 110, 80, -60, 0.1, );
		});

		// $('#one').click(function(){
		//   $('#one').addClass('focus');
		//   $('#two').removeClass('focus');
		//   $('#three').removeClass('focus');
		//   styles('#first', 0, 0, 0, 1,);
		//   styles('#second', 70, -80, -50, 0.6,);
		//   styles('#third', 110, 80, -60, 0.1,);
		// });


		// $('#two').click(function(){
		//   $('#one').removeClass('focus');
		//   $('#two').addClass('focus');
		//   $('#three').removeClass('focus');
		//   styles('#first', 110, 80, -60, 0.1,);
		//   styles('#second', 0, 0, 0, 1,);
		//   styles('#third', 70, -80, -50, 0.6,);
		// });

		// $('#three').click(function(){
		//   $('#one').removeClass('focus');
		//   $('#two').removeClass('focus');
		//   $('#three').addClass('focus');
		//   styles('#first', 70, -80, -50, 0.6,);
		//   styles('#second', 110, 80, -60, 0.1,);
		//   styles('#third', 0, 0, 0, 1,);
		// });


	};






	if (window.innerWidth <= 998) {
		revSlider.classList.add('swiper-container');
		revWrap.classList.add('swiper-wrapper');
		for (let slide of revSlide) {
			slide.classList.add('swiper-slide');
		}
		const swiper2 = new Swiper(".reviews .swiper-container", {
			slidesPerView: 'auto',
			spaceBetween: 100,
			loop: true,
			autoHeight: true,
			pagination: {
				el: ".reviews .swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			autoplay: {
				delay: 4000,
			},
		});
	}
});