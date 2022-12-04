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
});