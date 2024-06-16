// Method 1 Using Array
function fibbonacciSeries(n) {
  if (typeof n !== "number" || n <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }

  // Handle the case for n = 1 separately
  if (n === 1) {
    return 0;
  }
  let fib = [0, 1];
  for (let i = 2; i < n - 2; i++) {
    let sum = fib[i - 1] + fib[i - 2];
    if (sum < n) {
      fib.push(sum);
    }
  }
  return fib.toString();
}
console.log(fibbonacciSeries(8));



// Method 2 Without Using Array
// Without Using the Array
function fibbonacciSeries2(n) {
  if (typeof n !== "number" || n <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }

  // Handle the case for n = 1 separately
  if (n === 1) {
    return 0;
  }
  let a = 0;
  let b = 1;
  let fibSeries = "";
  fibSeries += a + " ";
  fibSeries += b + " ";
  for (let i = 2; i < n - 2; i++) {
    let sum = a + b;
    if (sum < n) {
      fibSeries += sum + " ";
      a = b;
      b = sum;
    }
  }
  return fibSeries.split(" ").join(", ");
}

let nums = 10;
console.log(fibbonacciSeries2(nums));
