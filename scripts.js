function calculate1() {
	var number1 = parseFloat(document.getElementById('value-1').value);
	var number2 = parseFloat(document.getElementById('value-2').value);
	var operation1 = document.getElementById('operators-1').value;

	if (operation1 === '+') {
		var number2 = document.getElementById('result-1').value = number1 + number2;
	}

	if (operation1 === '-') {
		var number2 = document.getElementById('result-1').value = number1 - number2;
	}

	if (operation1 === '*') {
		var number2 = document.getElementById('result-1').value = number1 * number2;
	}

	if (operation1 === '/') {
		var number2 = document.getElementById('result-1').value = number1 / number2;
	}
}

// LIMPIA LOS CAMPOS

function clean1() {
	document.getElementById('value-1').value = "";
	document.getElementById('value-2').value = "";
	document.getElementById('result-1').value = "";
}