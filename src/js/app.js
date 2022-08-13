import "../scss/style.scss";

// Таймер
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}

// Форма

const validateFields = (form, fieldsArray) => {
	fieldsArray.forEach((field) => {
	  field.removeClass("input-error");
	  if (field.val().trim() == "") {
		 field.addClass("input-error");
	  }
	});
 
	const errorFields = form.find(".input-error");
	return errorFields.length == 0;
 };
 $(".form").submit((e) => {
	e.preventDefault();
 
	const form = $(e.currentTarget);
	const name = form.find("[name='name']");
	const phone = form.find("[name='phone']");
	const comment = form.find("[name='comment']");
	const to = form.find("[name='to']");
 
	const modal = $("#modal");
	const content = modal.find(".modal__content");
 
	content.removeClass("error-modal");
 
	const isValid = validateFields(form, [name, phone, comment, to]);
 });

window.onload = function () {
	var fiveMinutes = 60 * 10,
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
};


// Плавный скролл до элемента

const smoothLinks = document.querySelectorAll("a[href*='#']");
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("href");

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
};