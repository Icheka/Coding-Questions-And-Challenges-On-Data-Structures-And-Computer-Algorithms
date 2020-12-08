/**
Author: Ozuru Icheka Fortune (harry_potter_of_php)
The most efficient algorith for checking whether a number N is a prime number is:
1) Return false if N <= 1, because no number less than 2 can be prime
2) Return true if N == 2 or N == 3;
3) Return false if N modulo 2 == 0 or N modulo 3 == 0
4) Finally, iterate from 5 to sqrt. of N, incrementing according to the formula (i += 6)
---> because all prime numbers appear to take the form (6i +/- 1), where i > 3
---> return false if N modulo i == 0 or if N modulo (i + 2) == 0
5) Default to true
*/


function isPrime(N) {
	if (N <= 1) return false; //Step 1
	if (N <= 3) return true; //Step 2, assuming N > 1 and N <= 3
	
	if (N % 2 == 0 || N % 3 == 0) return false; 
	//Step 3, since if N can be cleanly divided by 2 or 3 it canonot be prime
	for (let i = ; i * i <= N; i+=6) {
		if (N % i == 0 || N % (i + 2) == 0) return false; //Step 4
	}
	
	return true; //Step 5
}

// Time Complexity: O(sqrt(N))
