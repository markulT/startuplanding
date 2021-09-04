function testWebP(callback) {
	var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

}

testWebP(function (support) {
	if (support == true) { document.querySelector('body').classList.add('webp'); } else { document.querySelector('body').classList.add('no-webp'); }

});
const slider = document.querySelector('.slider2');
let sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function (indicator, index) {
	indicator.addEventListener('click', function () {
		sectionIndex = index;
		document.querySelector('.controls .selected').classList.remove('selected');
		indicator.classList.add('selected');
		slider.style.transform = 'translate(' + (index) * -33.333333 + '%)';
		document.querySelector('.slider2 section').forEach(function (i, ind) {
			document.querySelector('.slider2 section').visibility = hidden;
		})
	})
})
document.querySelector('.header__burger').addEventListener('click', function () {
	document.querySelector('.header__nav').classList.toggle('active');
	document.querySelector('.header__burger').classList.toggle('active');
})