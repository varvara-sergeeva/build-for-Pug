document.addEventListener("DOMContentLoaded", function () {
	const windowWidth = window.innerWidth;
	const horizontalLenght = document.querySelector('.horizontal__body').scrollWidth;
	const distFromTop = document.querySelector('.horizontal-section').offsetTop;
	var scrollDistance = distFromTop + horizontalLenght - windowWidth;
	document.querySelector('.horizontal-section').style.height = horizontalLenght + "px";

	window.onscroll = function () {
		var scrollTop = window.pageYOffset;
		if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
			document.querySelector('.horizontal__body').style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
		}
	}
});