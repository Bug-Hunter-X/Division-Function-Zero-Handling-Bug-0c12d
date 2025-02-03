function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect handling of zero values
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Throws an error, should return 0
console.log(myFunction(0, 5)); // Throws an error, should return 0