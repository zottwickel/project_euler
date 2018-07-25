function euler2() {
	var fib1 = 1;
	var fib2 = 1;
	var sum = 0;
	for (let i = 0; i < 4000000; ) {
		if (i % 2 == 0) {
			sum += i;
		}
			i = fib1 + fib2;
			fib1 = fib2;
			fib2 = i;
	};
	return sum;
};
euler2();