function euler5() {
	var value = 0;
	var i = 2520;
	while ( 1 ) {
		if (i % 11 == 0 && i % 12 == 0 && i % 13 == 0 && i % 14 == 0 && i % 15 == 0 &&
				i % 16 == 0 && i % 17 == 0 && i % 18 == 0 && i % 19 == 0 && i % 20 == 0) {
			value = i;
			break
		}
		i += 2520
	};
	return value;
};
euler5();