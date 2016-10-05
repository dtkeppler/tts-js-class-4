function foo() {
	var bar = "closure";
	function zip() {
		var quux = "Woah, we just saw " + bar + ", man";
		console.log(quux)
	}
	zip();
}

foo();