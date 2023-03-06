const fibonacci = function(n) {
    if(n < 1) return "OOPS";
    if(n === 0) return 0;

    let fibonacciSequence = [1,1];
    for(i = 2; i < n; i++){
        fibonacciSequence.push(fibonacciSequence[i-2]+fibonacciSequence[i-1]);
    }
    return fibonacciSequence[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
