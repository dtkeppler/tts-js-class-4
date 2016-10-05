function bigFunc(bigArg) {
	var bigVar = bigArg * 2;
	function lilFunc(lilArg) {
		console.log(bigVar + lilArg);
	}
	lilFunc(5);
}

bigFunc(5);

