const fibonacci = function(num) {
let number=parseInt(num);
console.log("intnumber" + number);
let result = 0;
let fibonacciArray=[0, 1];
let pos1 = 0;
let pos2 = 1;
if (number<0) {
    return "OOPS"
} else {
    for(let i=1; i<=number; i++) {
   let nextNum = fibonacciArray[pos1] + fibonacciArray[pos2];
    fibonacciArray.push(nextNum);
    pos1+=1;
    pos2+=1;
    if(i==number-1 || i==number){
        result = nextNum;
        console.log(result);
        return result;
    }}
}

};

// fibonacci(1);
// fibonacci("1");
fibonacci("1");
// fibonacci("2");
// Do not edit below this line
module.exports = fibonacci;
