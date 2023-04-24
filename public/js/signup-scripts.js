/**
 * Signup form front-end scripts
 */

//shows an info when user clicks on question mark on signup form
const myFunction = () => {
	var x = document.getElementById("birthday-info-container");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
//When user clicks somewhere else info box disapears
document.addEventListener('mouseup', function (e) {
	var container = document.getElementById('birthday-info-container');
	if (!container.contains(e.target)) {
		container.style.display = 'none';
	}
});

const genderFunction = () => {
	var x = document.getElementById("gender-info-container");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
document.addEventListener('mouseup', function (e) {
	var container = document.getElementById('gender-info-container');
	if (!container.contains(e.target)) {
		container.style.display = 'none';
	}
});

//this expands the form when user selects "custom gender"
const expand = () => {
	if (document.getElementById("other").checked) {
		document.getElementById("toExpand").style.visibility = "visible";
		document.getElementById("toExpand").style.display = "block";
		const list = document.getElementById("myForm").classList;
		list.add("sign-up-form-expanded");
	}
	else if (document.getElementById("female").checked) {
		document.getElementById("toExpand").style.visibility = "hidden";
		document.getElementById("toExpand").style.display = "none";
		const list = document.getElementById("myForm").classList;
		list.remove("sign-up-form-expanded");

	}
	else if (document.getElementById("male").checked) {
		document.getElementById("toExpand").style.visibility = "hidden";
		document.getElementById("toExpand").style.display = "none";
		const list = document.getElementById("myForm").classList;
		list.remove("sign-up-form-expanded");

	}
	else
		return;
}


