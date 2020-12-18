/**
* Author: Ozuru, Icheka Fortune <harry_potter_of_php>
*
* Functon signature: FindMedian(arr: number[]): number
*
* Assumption(s):
* i) An array will always be passed
* 
* Use cases: 
* i)    If an empty array is passed, return null
* ii)   If an array with one element is passed, return <arr[0]>
* iii)  If an array with an even number of elements is passed, return <arr[arr.length / 2] + arr[(arr.length / 2) - 1]>
* iv) 	If an array with an odd number of elements is passed, return <arr[(arr.length - 1) / 2]>
*
* Time complexity: O(1)
*/

function FindMedian(arr) {
	// UC 1
	if (arr.length == 0) return null;
	
	// UC 2
	if (arr.length == 1) return arr[0];
	
	// UC 3
	if ((arr.length % 2) == 0) {
		let N = (arr.length / 2);
		return (arr[N] + arr[N - 1]) / 2;
	}
	
	// UC 4
	if ((arr.length % 2) !== 0) {
		let N = Math.floor(arr.length / 2);
		return arr[N];
	}
}
