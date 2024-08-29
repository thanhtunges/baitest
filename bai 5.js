class ManagerInt {
    sumK(m, n) {
        const current = [];
        this.findSubsets(m, n, 0, current);
    }

    findSubsets(m, n, index, current) {
        if (n === 0) {
            console.log(`[${current.join(', ')}]`);
            return;
        }
        if (index >= m.length) {
            return;
        }

        // Include the current element
        current.push(m[index]);
        this.findSubsets(m, n - m[index], index + 1, current);

        // Exclude the current element
        current.pop();
        this.findSubsets(m, n, index + 1, current);
    }
}

// Example usage
const manager = new ManagerInt();
const m = [1, 6, 8, 7, 4, 2 , 9, 3];
const n = 10;
manager.sumK(m, n);
