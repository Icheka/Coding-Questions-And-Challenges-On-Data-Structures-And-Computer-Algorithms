// Challenge
// Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers 
//stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), 
//the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, 
//and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] 
//then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. 
//The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
//If both ranges do not overlap by at least x numbers, then your program should return the string false.

// Sample Test Cases
// Input:5,11,1,5,1
// Output:true
//
// Input:1,8,2,4,4
// Output:false


function OverlappingRanges(arr) {

    let f = [arr[0],arr[1]].sort();
    let s = [arr[2],arr[3]].sort();
     
    if (f[1] < s[0] || s[1] < f[0]) {
        return false;
    } else if (f[0] < s[0]) {
        if (f[1] < s[1]) {return f[1] - s[0]}
        if (f[1] > s[1]) {return s[1] - s[0]}
    } else if (f[0] > s[0]) {
        if (f[1] > s[1]) {return s[1] - f[0]}
        if (f[1] < s[1]) {return f[1] - f[0]}
    }
}

OverlappingRanges([5, 4, 9, 1, 7]);