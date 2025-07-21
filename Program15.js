// 15. Simple Calculator
// Definition: Perform +, -, *, / between two numbers.
// Input: 4 + 2
// Output: 6

const input1=4
const input2=2
const oparetor='+'
let result
if(oparetor=='+') {
    result=input1+input2
}
else if(oparetor=='-') {
    result=input1-input2
}
else if(oparetor=='*') {
    result=input1*input2
}
else if(oparetor=='/') {
    if(input2!==0) {
        result=input1/input2
    }
    else {
        result="Divede by zero is not possible."
    }
}
else {
    result="Possible oparetion in result is '+','-','*' and '/'."
}
console.log("Result is:",result)