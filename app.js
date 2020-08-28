/* --------------------------------------------------
smooth scroll down - using only Vanilla JavaScript
------------------------------------------------- */

function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = easeDown(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}
	requestAnimationFrame(animation);
}


// Easing mathematics - credit: https://www.gizma.com/easing/
function easeDown(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t * t + b;
	t -= 2;
	return -c / 2 * (t * t * t * t - 2) + b;
};


var go = document.querySelector('#go');
go.addEventListener('click', function () {
	smoothScroll('#siberian-husky', 3500);
});