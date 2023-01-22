document.querySelector(window).scroll(function () {
	console.log("scroll window!!");
	if (document.querySelector(window).scrollTop >= 150) {
		document.querySelector('.header__second').classList.add('fixed-header');
		console.log("header add class");
	} else {
		document.querySelector('.header__second').classList.remove('fixed-header');
		console.log("header REMOOOVE class");
	}
});

//$(window).scroll(function () {
//	if ($(window).scrollTop() >= 150) {
//		console.log("header add class");
//		$('.header__second').addClass('fixed-header');
//	} else {
//		console.log("header add class");
//		$('.header__second').removeClass('fixed-header');
//	}
//});