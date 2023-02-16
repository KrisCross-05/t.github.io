// Navigation Bar Transform Style on Click //
function navbarAnimation() {
	const navbarCheckbox = document.querySelector("#nav-check");
	const navbarHamburger = document.querySelector(".fa-bars");
	const docBody = document.querySelector("body");

	if (navbarCheckbox.checked == true) {
		navbarHamburger.style.transform = "scale(2.3)";
		docBody.style.transition = "2s linear";
		docBody.style.overflowY = "hidden";
		} else {
			navbarHamburger.style.transform = "scale(1.8)";
			docBody.style.transition = "none";
			docBody.style.overflowY = "scroll";
		}
	}