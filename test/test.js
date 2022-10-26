document.addEventListener("DOMContentLoaded", () => {
	const btn = document.querySelector("#intro2 > button");
	const musicList = document.querySelector("#music_list");
	const introP = document.querySelector("#intro_p");
	const player1 = document.querySelector("#player1");
	const intro1 = document.querySelector("#intro1");
	let isAlbume = true;

	btn.addEventListener("click", () => {
		if (isAlbume) {
			btn.textContent = "INTRODUCTION";
			musicList.style.display = "block";
			introP.style.display = "none";
			player1.style.display = "flex";
			intro1.style.display = "none";
			isAlbume = false;
		} else {
			btn.textContent = "ALBUME";
			musicList.style.display = "none";
			introP.style.display = "block";
			player1.style.display = "none";
			intro1.style.display = "flex";
			isAlbume = true;
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const btn2 = document.querySelector("#intro22 > button");
	const musicList2 = document.querySelector("#music_list2");
	const introP2 = document.querySelector("#intro_p2");
	const player12 = document.querySelector("#player12");
	const intro12 = document.querySelector("#intro12");
	let isAlbume = true;
	btn2.addEventListener("click", () => {
		if (isAlbume) {
			btn2.textContent = "INTRODUCTION";
			musicList2.style.display = "block";
			introP2.style.display = "none";
			player12.style.display = "flex";
			intro12.style.display = "none";
			isAlbume = false;
		} else {
			btn2.textContent = "ALBUME";
			musicList2.style.display = "none";
			introP2.style.display = "block";
			player12.style.display = "none";
			intro12.style.display = "flex";
			isAlbume = true;
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const btn3 = document.querySelector("#intro23 > button");
	const musicList3 = document.querySelector("#music_list3");
	const introP3 = document.querySelector("#intro_p3");
	const player13 = document.querySelector("#player13");
	const intro13 = document.querySelector("#intro13");
	let isAlbume = true;
	btn3.addEventListener("click", () => {
		if (isAlbume) {
			btn3.textContent = "INTRODUCTION";
			musicList3.style.display = "block";
			introP3.style.display = "none";
			player13.style.display = "flex";
			intro13.style.display = "none";
			isAlbume = false;
		} else {
			btn3.textContent = "ALBUME";
			musicList3.style.display = "none";
			introP3.style.display = "block";
			player13.style.display = "none";
			intro13.style.display = "flex";
			isAlbume = true;
		}
	});
});

// document.addEventListener("DOMContentLoaded", () => {
// 	const music = document.querySelector("#music_list li");
// 	const player = document.querySelector("#player_button > audio");
// 	music.addEventListener("click", () => {
// 		player.src = "./music/We All Try.mp3";
// 		music.style.fontWeight = "bold";
// 		player.play();
// 	});
// });

document.addEventListener("DOMContentLoaded", () => {
	const musicAll = document.querySelectorAll("#music_list li");
	const audio = document.querySelector("#player_button > audio");
	const musics = [
		"./music/Frank Ocean - _Super Rich Kids_ (feat. Earl Sweatshirt).mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
		"./music/Frank Ocean - Nights.mp3",
		"./music/Thinking About You - Frank Ocean.mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
	];
	for (let i = 0; i < musicAll.length; i++) {
		musicAll[i].addEventListener("click", () => {
			for (let j = 0; j < musicAll.length; j++) {
				if (i == j) {
					audio.style.display = "block";
					musicAll[j].style.fontWeight = "bold";
					audio.src = musics[j];
					audio.play();
				} else {
					musicAll[j].style.fontWeight = "normal";
				}
			}
		});
	}
});
