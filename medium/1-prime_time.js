// Challenge
// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
// Sample Test Cases
// Input:19
// Output:true
//
// Input:110
// Output:false


let PrimeTime = (num) => {
  let prime = true;
  for (let i = num - 1; i > 1; i--) {
    if (Number.isInteger(num/i)) { prime = false}
  }
  return prime;
}

PrimeTime(829)