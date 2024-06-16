function printPattern(n) {
  for (let i = 0; i < n - 1; i++) {
    let line = "";
    for (let j = 0; j < n - i - 1; j++) {
      line += "  ";
    }
    for (let j = 0; j <= i; j++) {
      line += 1 + 2 * j + " ";
    }
    for (let k = 0; k < i; k++) {
      line += String.fromCharCode(65 + k) + " ";
    }
    console.log(line);
  }

  // Now printing the revers of upper one
  for (let i = n - 1; i >= 0; i--) {
    let line = "";
    for (let j = 0; j < n - i - 1; j++) {
      line += "  ";
    }
    for (let j = 0; j <= i; j++) {
      line += 1 + 2 * j + " ";
    }
    for (let k = 0; k < i; k++) {
      line += String.fromCharCode(65 + k) + " ";
    }
    console.log(line);
  }
}
let num = prompt("Enter your lucky Number");
// HANDLING EDGE CASES
if (parseInt(num) < 0) {
  alert("Please enter positive integer");
} else if (isNaN(num)) {
  alert("Please enter a valid number");
} else {
  printPattern(parseInt(num));
}
