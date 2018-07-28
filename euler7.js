function euler7() {
	function isPrime(num) {
		for (let i = 3; i < num; i += 2) {
			if ( num % i == 0 ) {
				return false
				break
			}
		};
		return true
	};
	var counter = 6;
	var prime = 13;
	var i = 13;
	while ( counter <= 10001 ) {
		if (isPrime(i)) {
			prime = i;
			counter += 1;
		}
		i += 2;
	};
	return prime
};
euler7();