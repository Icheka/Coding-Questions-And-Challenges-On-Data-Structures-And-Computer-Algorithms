// Challenge
// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string
//true if the characters a and b are separated by exactly 3 places anywhere in the string at least once
//(ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
//Otherwise return the string false.
// Sample Test Cases
// Input:"after badly"
// Output:"false"
//
// Input:"Laura sobs"
// Output:"true"


        var abCheck = function(str) {
            var checker = false;
            var strArr = str.split("");

            for (var i = 0; i < strArr.length; i++) {
                if (/[aA]/.test(strArr[i]) && /[bB]/.test(strArr[i + 4])) {
                    checker = true;
                    return checker;
                } else if (/[aA]/.test(strArr[i]) && /[bB]/.test(strArr[i - 4])) {
                    checker = true;
                    return checker;
                }

            }
            return checker;
        }


        abCheck("B123a1234b")
