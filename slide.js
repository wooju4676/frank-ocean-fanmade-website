document.addEventListener("DOMContentLoaded", () => {
	console.log(`width: ${window.screen.width}, height: ${window.screen.height});
	
	let cnt = 0;
	let temp = 0;
	const prev = document.querySelector("#left-arrow");
	const next = document.querySelector("#right-arrow");
	const container = document.querySelector(".container");
	const inputs = document.querySelectorAll("input");

	prev.addEventListener("click", () => {
		cnt--;
		temp = -cnt * 33.33;
		container.style.transform = `translate(${temp}%,0)`;
		container.style.transitionDuration = "0.5s";
		if (cnt > 0) {
			next.style.display = "block";
		}
		if (cnt === 0) {
			prev.style.display = "none";
		}

		for (let i = 0; i < 3; i++) {
			console.log(`prev cnt: ${cnt}, i: ${i}`);
			if (cnt === i) {
				// inputs[i].setAttribute("checked", true);
				inputs[i].checked = true;
			} else {
				// inputs[i].removeAttribute("checked", true);
				inputs[i].checked = false;
			}
		}
	});

	next.addEventListener("click", () => {
		cnt++;
		temp = -cnt * 33.33;
		container.style.transform = `translate(${temp}%,0)`;
		container.style.transitionDuration = "0.5s";
		if (cnt > 0) {
			prev.style.display = "block";
		}
		if (cnt === 2) {
			next.style.display = "none";
		}

		for (let i = 0; i < 3; i++) {
			console.log(`next cnt: ${cnt}, i: ${i}`);
			if (cnt === i) {
				// inputs[i].setAttribute("checked", true);
				inputs[i].checked = true;
			} else {
				// inputs[i].removeAttribute("checked", true);
				inputs[i].checked = false;
			}
		}
	});
});
