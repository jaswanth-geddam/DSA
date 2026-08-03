/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let arr = s.split("");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        if (!/[a-zA-Z]/.test(arr[left])) {
            left++;
        } 
        else if (!/[a-zA-Z]/.test(arr[right])) {
            right--;
        } 
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join("");
};