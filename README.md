# Division Function Zero Handling Bug

This repository contains a JavaScript function that incorrectly handles zero values in a division operation. The function `myFunction` is supposed to return 0 if either of its arguments `a` or `b` is 0. However, it currently throws an error instead.

## Bug Description:
The issue lies in the way the function handles zero values.  It does not account for the possibility of division by zero or division with a zero numerator resulting in an unexpected behavior rather than a controlled return of 0.

## Bug Solution:
The provided `bugSolution.js` file fixes this bug by explicitly checking for zero values and returning 0 in those cases. This ensures that the function behaves as expected and handles zero input gracefully, without causing errors.