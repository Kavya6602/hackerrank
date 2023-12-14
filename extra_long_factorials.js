let n = 25;
let result = BigInt(1)
while( n > 0) {
    result *= BigInt(n);
    n -= 1;
}
console.log(result)