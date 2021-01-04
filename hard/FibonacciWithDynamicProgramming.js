/**
* Author: Ozuru Icheka Fortune
* 
* /Fibonacci
* Solves the Fibonacci time complexity problem (O(2^N) is impractical for real-world applications) using memoization and dynamic programming
* 
* Time Complexity: Best Case: O(1). Worse Case: O(N)
*/

class Fibonacci {
	constructor(cache={}) {
		this.cache = cache;
	}
	
	function get(n) {
		if (n <= 1) return n;
		
		if (this.cache[n]) return this.cache[n];
		
		return (this.cache[n] = this.get(n - 1) + this.get(n - 2));
		
	}
	
}
