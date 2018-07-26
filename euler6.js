function euler6() {
	var summedSquares = 0;
	var squaredSums = 0;
	var difference = 0;
	for ( let i = 1; i <= 100; i++ ) {
		squaredSums += i
		summedSquares += ( i ** 2)
	};
	squaredSums = (squaredSums ** 2);
	difference = squaredSums - summedSquares;
	return difference;
};
euler6();

// or if you're into some magic math formulas

function euler6() {
	var summedSquares = 0;
	var squaredSums = 0;
	var n = 100
	squaredSums = (n * ( n + 1 ) / 2) ** 2;
	summedSquares = ( n * ( n + 1 ) * ( 2 * n + 1 )) / 6;
	return (squaredSums - summedSquares);
};
euler6();