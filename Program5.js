// 5. Factorial of a Number
// Definition: Calculate factorial of a number.
// Input: 4
// Output: 24

const input=4
let factorial=1
for(let i=1;i<=input;i++) {
    factorial*=i;
}
console.log("Factorial is",factorial)