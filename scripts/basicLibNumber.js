const input = 1234;
const number = Number(input);

console.info(typeof input);
console.info(typeof number);
console.info(number);


console.info(Number("salah"))

// number static MAX_VALUE and MIN_VALUE

console.info(Number.MAX_VALUE);
console.info(Number.MIN_VALUE);
console.info(Number.MIN_SAFE_VALUE);
console.info(Number.MAX_SAFE_VALUE);
console.info(Number.NaN);
let data = Number(12345);

console.info(Number.isInteger(data));
console.info(Number.isNaN(data));

console.info(data.toString(2));
console.info(data.toLocaleString("en-US"));