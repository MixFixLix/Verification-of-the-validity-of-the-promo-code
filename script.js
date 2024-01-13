console.warn("JavaScript get ready!")

let balance = 0;
const code = "OXYGEN" //Promocode

function bal() {
	let balik = document.getElementById("bal");
	let promo = document.getElementById("promo");
	let not = document.getElementById("not");
	if (promo.value == code) {
		balance = balance + 50;
		balik.innerHTML = balance;
		not.innerHTML = "Промокод найден! +50 рублей"
		not.style.color = "green";
		not.style.opacity = "1";
		promo.value = "";
	}

	else if (promo.value == ""){
		not.style.opacity = "1";
		not.innerHTML = "Вы не ввели промокод";
		not.style.color = "red";
	}

	else {
		not.style.opacity = "1";
		not.innerHTML = "Промокод не найден";
		not.style.color = "red";
	}
	return;
}
