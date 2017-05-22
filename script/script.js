// linear main-menu:

document.getElementById('main-menu__cross-link').onclick = slise;

function slise() {
	document.getElementById('main-menu__wrapper').classList.remove('main-menu__wrapper-slice-left');
	document.getElementById('main-menu__wrapper').classList.add('main-menu__wrapper-slice');
	document.getElementById('main-menu__cross-link').style.display = "none";
	var a = document.getElementById('main-menu__array-link');

	a.style.display = "block";
	a.style.float = "none";
}

document.getElementById('main-menu__array-link').onclick = sliseLeft;

function sliseLeft() {
	document.getElementById('main-menu__wrapper').classList.remove('main-menu__wrapper-slice');
	document.getElementById('main-menu__wrapper').classList.add('main-menu__wrapper-slice-left');
	document.getElementById('main-menu__cross-link').style.display = "block";
	var a = document.getElementById('main-menu__array-link');

	a.style.display = "none";
	a.style.float = "right";
};


document.getElementById('1').onclick = fill('2');


function fill(id) {
	document.getElementById('id').style.left = "-1490px";
}
