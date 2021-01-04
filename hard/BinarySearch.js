/**
* Author: Ozuru, Icheka Fortune <harry_potter_of_php>
*
*/

function BinarySearch(arr, N) {
	if (arr.length == 0) return null;
	
	if (arr.length == 1) return arr[0];
	
	const median = getMedianOfArray(arr);
	const arr1 = arr.slice(0, arr.indexOf(median) + 1);
	const arr2 = arr.slice(arr.indexOf(median), arr[arr.length]);
	
	const arr1Max = Math.max(...arr1);
	const arr2Max = Math.max(...arr2);
	
	if (N > arr1Max) {
		// N must be found in arr2
		return BinarySearch(arr2, N);
	} else {
		// N must be found in arr1
		return BinarySearch(arr1,, N);
	}
}

function getMedianOfArray(arr) {
	if (arr.length == 0) return null;
	
	if (arr.length == 1) return arr[0];
	
	const N = arr.length;
	if (arr.length % 2 == 0) {
		// array is even
		return (arr[N/2] + arr[(N/2) - 1]) / 2;
	} else {
		// array is odd
		const midIdx = Math.floor(N/2);
		return arr[midIdx];
	}
}
