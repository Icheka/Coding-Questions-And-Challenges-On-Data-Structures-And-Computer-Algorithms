/**
* Author: Ozuru, Icheka Fortune <harry_potter_of_php>
*
* Functon signature: ArraySlice(arr: number[], first_idx, last_idx): sliced_arr: number[]
*
* Assumption(s):
* i) An array will always be passed
* ii) The array will always be passed as the first parameter
* iii) The second and third parameters will always only be integers
* 
* Use cases: 
* i)    If no index is given, return <arr>
* ii)   If only the <first_idx> is given, return arr[first_idx: arr.length]
* iii)  If both indexes are given return arr[first_idx, last_idx]\\
*
* Time complexity: O(N)
*/

function ArraySlice(arr, first_idx, last_idx) {
	// UC 1
	if (!first_idx && !last_idx) return arr;
	
	// UC 2
	if (first_idx && !last_idx) last_idx = arr.length;
	
	// initialize a new array for holding elements of <arr>
	let sliced_arr = [];
	
	// iterate through <arr>, pushing elements of <arr> that are found within the window
	// of arr[first_idx: last_idx]
	for (let i = first_idx; i < last_idx; i++) {
		sliced_arr.push(arr[i]);
	}
	
	return sliced_arr;
}
