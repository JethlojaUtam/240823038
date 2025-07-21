// 9. Check Prime Number
// Definition: Check whether the input number is prime.
// Input: 11
// Output: Prime

const input=11
for(let i=1;i<input;i++)
    if(input%i==0) {
        console.log(input,"is not prime.")
        break
    }
console.log(input,"is prime.")
