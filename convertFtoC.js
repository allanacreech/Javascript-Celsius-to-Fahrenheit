function convert(degree){
	var input;
	if (degree == "C"){
		input = document.getElementById("c").value * 9 / 5 +32;
		document.getElementById("f").value = Math.round(input);

	} else {
		input = document.getElementById("f").value -32 * 5 / 9;
		document.getElementById("c").value = Math.round(input);
	}
}


