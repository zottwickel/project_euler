function euler3() {
	var highPrime = 2;
	number = 600851475143;
	while (number != highPrime) {
		if (number % highPrime == 0) {
			number = number / highPrime;
			highPrime = 2;
		}
		else {
			highPrime += 1
		}
	};
	return highPrime;
};
euler3();