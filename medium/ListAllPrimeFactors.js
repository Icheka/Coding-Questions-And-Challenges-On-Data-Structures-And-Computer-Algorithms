/**
Author: Ozuru Icheka Fortune, (harry_potter_of_php)

* The most efficient algorithm for returning all prime factors of a number N is as follows:
1) A prime factor is a number that, when multiplied by another number, would yield N
2) If N is even, 2 must be one of its factors
3) Then we can just halve N and find its other factors
4) But, if N is odd, we'll have to do some iteration

*/

function listAllPrimeFactors(N) {
	let primes = [];
	
	if (N % 2 == 0) {
		primes.push(2); //(2)
		N = N / 2; 
		// A good way to understand this is:>>
		// 2 * k == N
		// therefore, k == N / 2
	}
	
	// Assuming N is odd, we want to iterate through it (i) and see if N % i == 0
	// We'll initialize i with 3 (instead of 1 as I used to do) because Step (2)
	// has already determined whether 2 is a factor of N
	// Also, we'll increment i by 2 each time. The best way I can explain this is :>>
	// let's say i = 3; adding 1 to i makes it even, a criteria we've already ruled out
	// but adding 2 to i (i + 2 == 5) makes it odd, which is exactly how we want it
	for (let i = 3; i * i < N; i += 2) {
		if (N % i == 0) primes.push(i);
	}
	// Finally, we catch an edge case here:>> if N is too small for the loop above to be 	// satisfied:
	if (N > 2) primes.push(N);
	
	return primes; //returns the array
}
