class ArrIntManager {
    constructor(arrInt) {
        this.arrInt = arrInt;
    }

    // Tính tổng các số trong mảng
    sumArray() {
        return this.arrInt.reduce((sum, num) => sum + num, 0);
    }

    // Kiểm tra số nguyên tố
    isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Tính tổng các số nguyên tố trong mảng
    sumOfPrimes() {
        return this.arrInt.filter(this.isPrime).reduce((sum, num) => sum + num, 0);
    }

    // Tìm và in ra bộ ba liên tiếp nhau sao cho: arrInt[i] + arrInt[i+1] = arrInt[i+2]
    findConsecutiveTriplets() {
        const triplets = [];
        for (let i = 0; i < this.arrInt.length - 2; i++) {
            if (this.arrInt[i] + this.arrInt[i + 1] === this.arrInt[i + 2]) {
                triplets.push([this.arrInt[i], this.arrInt[i + 1], this.arrInt[i + 2]]);
            }
        }
        return triplets;
    }

    // Tìm và in ra dãy con dài nhất có tổng = S
    findLongestSubarrayWithSum(S) {
        let maxLength = 0;
        let result = [];
        for (let start = 0; start < this.arrInt.length; start++) {
            let sum = 0;
            for (let end = start; end < this.arrInt.length; end++) {
                sum += this.arrInt[end];
                if (sum === S) {
                    if (end - start + 1 > maxLength) {
                        maxLength = end - start + 1;
                        result = this.arrInt.slice(start, end + 1);
                    }
                }
            }
        }
        return result;
    }

}

// Ví dụ sử dụng
const arrInt = [1, 2, 3, 5, 4, 1, 3, 4, 5, 4, 5, 9, 7, 0, 11, 13, 10, 23];
const manager = new ArrIntManager(arrInt);

console.log("Tổng các số trong mảng:", manager.sumArray());
console.log("Tổng các số nguyên tố trong mảng:", manager.sumOfPrimes());
console.log("Bộ ba liên tiếp thỏa mãn điều kiện:", manager.findConsecutiveTriplets());
console.log("Dãy con dài nhất có tổng = 20:", manager.findLongestSubarrayWithSum(20));

