import Needle from "./modules/needle";

/*-----------------------------------------------------------------------------------------------------------
Инициализация
-------------------------------------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
	const crSber = document.querySelector("#creative-sber");
	const crOkko = document.querySelector("#creative-okko");
	const crSamo = document.querySelector("#creative-samolet");

	crSber &&
		new Needle("#creative-sber", {
			firm: "sber",
			aspect: "4/3",
		});
	crSamo &&
		new Needle("#creative-samolet", {
			firm: "samolet",
			aspect: "4/3",
		});
	crOkko &&
		new Needle("#creative-okko", {
			firm: "okko",
			aspect: "4/3",
		});
});

