/**
 * Consider the factorial of the number
 * @param {number} f Number
 * @returns {number} Result
 */
const fact = f => {
  if (f === 1) return 1;
  return x * fact(f - 1);
};

console.log(fact(5));
