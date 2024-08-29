function calculateSum(x, n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += Math.pow(x, i);
    }

    return sum;
}

// Ví dụ sử dụng:
const x = 2;
const n = 3;
const result = calculateSum(x, n);
console.log(`S(${x}, ${n}) = ${result}`);
