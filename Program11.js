// 11. Sum of Digits
// Definition: Calculate the sum of all digits in a number.
// Input: 123
// Output: 6

const input=123
const convert=String(input)
let sum=0
for(let i=0;i<convert.length;i++) {
    sum+=Number(convert[i])
}
console.log("Sum of all digit is:",sum)