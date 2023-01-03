/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

let a = '11'
let b = '99'

function add(a, b) {
       
    a = a.split('').reverse();
    b = b.split('').reverse(); 
    res = [];

    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        let sum = (Number(a[i]) || 0) + (Number(b[i]) || 0);
        if (sum > 9){
            sum -= 10;
            if (a[i+1]) {
                a[i+1] = Number(a[i+1]) + 1;
            } else {
                a[i+1] = 1;
            }
            
        }
        res.push(sum);
    }

    return res.reverse().join(''); 
}