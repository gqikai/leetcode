var Fibonacci = function (n) {
    var arr = [0,1];
    for(var i = 2; i <= n; i ++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

console.log(Fibonacci(10));