function getTotalX(a, b) {
function gcd(x, y) {
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

  // Find the LCM of all elements in array a
  let lcm_a = a[0];
  for (let i = 1; i < a.length; i++) {
    lcm_a = lcm(lcm_a, a[i]);
  }

  // Find the GCD of all elements in array b
  let gcd_b = b[0];
  for (let i = 1; i < b.length; i++) {
    gcd_b = gcd(gcd_b, b[i]);
  }

  // Count the multiples of lcm_a that divide gcd_b evenly
  let count = 0; 
  let multiple = lcm_a;
  while (multiple <= gcd_b) {
    if (gcd_b % multiple === 0) {
      count += 1;
    }
    multiple += lcm_a;
  }

  return count;
}
