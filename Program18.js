// 18. Print All Divisors
// Definition: Display all positive divisors of a number.
// Input: 10
// Output: 1 2 5 10

const input=10
for(let i=1;i<=input;i++) {
    if(input%i==0) {
        console.log("Positive divisor is:",i)
    }
}
