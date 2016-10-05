function outer(){

	var a = "This is: a";
	var b = {
		name: "This is: b"
	}

	console.log("TEST 1: " + a);
	console.log("TEST 1: " + b.name);

  function inner(a, b) {

  	a = "Yo homie, I be: a";
  	b.name = "Yo homie, I be: b";

  	console.log("TEST 2: " + a);

  	console.log("TEST 2: " + b.name);
  }

  inner(a, b);

  // this prints "this is", because strings (as a primative type) are assigned by value
  console.log("TEST 3: " + a);
  // this prints "I be", because objects are assigned by reference, not value 
  console.log("TEST 3: " + b.name);
}

outer();