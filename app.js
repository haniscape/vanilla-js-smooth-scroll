function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = windows.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}


	requestAnimationFrame(animation);
}



function ease(t, b, c, d) {
	t /= d;
	return c * t * t + b;
}



var go = document.querySelector('.go');

go.addEventListener('click', function () {
	smoothScroll('.beagle', 1000);
});


