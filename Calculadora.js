
function addNumbers(x,y){
    return x+y;
}
function substractNumbers(x,y){
    return x-y;
}
function multiplyNumbers(x,y){
    return x*y;
}
function divideNumbers(x,y){
    return x/y;
}
function squareNumber(x){
    return x*x;
}
function squareRootNumber(x){
    return Math.sqrt(x)
}

module.exports = {
    add: addNumbers,
    substract: substractNumbers,
    multiply: multiplyNumbers,
    divide: divideNumbers,
    square : squareNumber,
    squareRoot: squareRootNumber
}