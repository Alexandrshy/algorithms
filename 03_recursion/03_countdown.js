/**
 * Countdown
 * @param {number} item Number
 */
const countdown = item => {
  console.log(item);
  if (item <= 0) return;
  countdown(item - 1);
};

countdown(5);
