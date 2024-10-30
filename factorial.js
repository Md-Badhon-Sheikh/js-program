let n =5;
let result = 1;
if (n < 0) {
    console.log("Factorial is not defined for negative numbers.");
}
else {
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    console.log(result);
}
