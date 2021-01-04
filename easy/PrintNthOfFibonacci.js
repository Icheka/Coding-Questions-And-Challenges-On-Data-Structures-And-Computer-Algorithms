/**
* Author: Ozuru, Icheka Fortune <harry_potter_of_php>
*
* printNthFib(n: number): number
* Time Complexity: O(2^N)
*/

printNthFib(n) {
	if (n <= 1) return n; // because the fibonacci sequence: 0,1,1,2,3...
	
	return printNthFib(n - 1) + printNthFib(n - 2);
}
