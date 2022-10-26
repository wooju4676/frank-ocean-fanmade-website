document.addEventListener("DOMContentLoaded", () => {
	let isIntro1 = true;
	let isIntro2 = true;
	let isIntro3 = true;

	const btn1 = document.querySelector("#album1_intro2 > button");
	const btn2 = document.querySelector("#button2");
	const btn3 = document.querySelector("#button3");
	const audio1 = document.querySelector("#audio1");
	const audio2 = document.querySelector("#audio2");
	const audio3 = document.querySelector("#audio3");
	const musics = document.querySelectorAll(".list1 > li");
	const musics2 = document.querySelectorAll(".list2 > li");
	const musics3 = document.querySelectorAll(".list3 > li");
	const songTitle1 = document.querySelector("#player1 > h2");
	const songTitle2 = document.querySelector("#player2 > h2");
	const songTitle3 = document.querySelector("#player3 > h2");

	const songs1 = [
		"./music/Frank Ocean - _Super Rich Kids_ (feat. Earl Sweatshirt).mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
		"./music/Frank Ocean - Nights.mp3",
		"./music/Thinking About You - Frank Ocean.mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
	];
	const songs2 = [
		"./music/Frank Ocean - _Super Rich Kids_ (feat. Earl Sweatshirt).mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
		"./music/Frank Ocean - Nights.mp3",
		"./music/Thinking About You - Frank Ocean.mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
	];
	const songs3 = [
		"./music/Frank Ocean - _Super Rich Kids_ (feat. Earl Sweatshirt).mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
		"./music/Frank Ocean - Nights.mp3",
		"./music/Thinking About You - Frank Ocean.mp3",
		"./music/We All Try.mp3",
		"./music/American Wedding (ft. James Fauntleroy).mp3",
	];

	// 앨범 1 버튼 클릭
	btn1.addEventListener("click", () => {
		const intro = document.querySelector("#album1_intro1");
		const player = document.querySelector("#player1");
		const introP = document.querySelector("#intro_p1");
		const musicList = document.querySelector("#music_list1");
		if (isIntro1) {
			intro.style.display = "none";
			player.style.display = "flex";
			introP.style.display = "none";
			musicList.style.display = "flex";
			isIntro1 = false;
		} else {
			intro.style.display = "flex";
			player.style.display = "none";
			introP.style.display = "block";
			musicList.style.display = "none";
			isIntro1 = true;
		}
	});

	// 앨범2 버튼 클릭
	btn2.addEventListener("click", () => {
		const intro2 = document.querySelector("#album2_intro1");
		const player2 = document.querySelector("#player2");
		const introP2 = document.querySelector("#intro_p2");
		const musicList2 = document.querySelector("#music_list2");
		if (isIntro2) {
			intro2.style.display = "none";
			player2.style.display = "flex";
			introP2.style.display = "none";
			musicList2.style.display = "flex";
			isIntro2 = false;
		} else {
			intro2.style.display = "flex";
			player2.style.display = "none";
			introP2.style.display = "block";
			musicList2.style.display = "none";
			isIntro2 = true;
		}
	});

	// 앨범 3 버튼 클릭
	btn3.addEventListener("click", () => {
		const intro3 = document.querySelector("#album3_intro1");
		const player3 = document.querySelector("#player3");
		const introP3 = document.querySelector("#intro_p3");
		const musicList3 = document.querySelector("#music_list3");
		if (isIntro3) {
			intro3.style.display = "none";
			player3.style.display = "flex";
			introP3.style.display = "none";
			musicList3.style.display = "flex";
			isIntro3 = false;
		} else {
			intro3.style.display = "flex";
			player3.style.display = "none";
			introP3.style.display = "block";
			musicList3.style.display = "none";
			isIntro3 = true;
		}
	});

	// 노래 재생 1
	for (let i = 0; i < musics.length; i++) {
		musics[i].addEventListener("click", () => {
			for (let j = 0; j < musics.length; j++) {
				if (i === j) {
					audio1.style.display = "block";
					musics[j].style.fontWeight = "bold";
					const temp = musics[j].textContent;
					songTitle1.textContent = temp.substring(0, temp.indexOf(":") - 1);
					songTitle1.style.display = "block";
					audio1.src = songs1[j];
					audio1.play();
				} else {
					musics[j].style.fontWeight = "normal";
				}
			}
		});
	}

	// 노래 재생 2
	for (let i = 0; i < musics2.length; i++) {
		musics2[i].addEventListener("click", () => {
			for (let j = 0; j < musics2.length; j++) {
				if (i === j) {
					audio2.style.display = "block";
					musics2[j].style.fontWeight = "bold";
					const temp = musics2[j].textContent;
					songTitle2.textContent = temp.substring(0, temp.indexOf(":") - 1);
					songTitle2.style.display = "block";
					audio2.src = songs2[j];
					audio2.play();
				} else {
					musics2[j].style.fontWeight = "normal";
				}
			}
		});
	}

	// 노래 재생 3
	for (let i = 0; i < musics3.length; i++) {
		musics3[i].addEventListener("click", () => {
			for (let j = 0; j < musics3.length; j++) {
				if (i === j) {
					audio3.style.display = "block";
					musics3[j].style.fontWeight = "bold";
					const temp = musics3[j].textContent;
					songTitle3.textContent = temp.substring(0, temp.indexOf(":") - 1);
					songTitle3.style.display = "block";
					audio3.src = songs3[j];
					audio3.play();
				} else {
					musics3[j].style.fontWeight = "normal";
				}
			}
		});
	}
});
