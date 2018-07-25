function euler4() {
	answer = 0
	for (i = 100; i < 1000; i++) {
		for (j = 100; j < 1000; j++) {
			product = i * j;
			if (product.toString() == product.toString().split("").reverse().join("")) {
				if (product > answer) {
					answer = product;
				}
			}
		}
	}
	return answer;
};
euler4();