/**
* Author: Ozuru, Icheka Fortune <harry_potter_of_php>
* 
* class BubbleSort: implements the bubble sort algorithm and sorts elements 
* of an array to a specified order (ascending: "toMax") 
* or descending (any other value passed with the <operation> parameter.
*
* Time Complexity: O(N^2)
* Space Complexity: O(1)
*/

class BubbleSort {
	function sort(arr, operation="toMax") {
		if (operation == "toMax") {
			for (let i = 0; i < arr.length; i++) {
				for (let j = 0; j <= i; j++) {
					if (arr[i] > arr[j]) {
						this.swap(arr, i, j);
					}
				}
			}
		} else {
			for (let i = 0; i < arr.length; i++) {
				for (let j = 0; j <= i; j++) {
					if (arr[i] < arr[j]) {
						this.swap(arr, i, j);
					}
				}
			}			
		}
		
		return arr;
	
	}

	function swap(arr, idx1, idx2) {
		let tmp = arr[idx1];
		arr[idx1] = arr[idx2];
		arr[idx2] = tmp;

		return arr;
	}

}

let bubble = new BubbleSort();
let arr = [3,5,1,2,7,8];
// Ascending order
console.log(bubble.sort(arr)); // [1,2,3,5,7,8]
// Descending order
console.log(bubble.sort(arr, "toMin")); // [8,7,5,3,2,1]
