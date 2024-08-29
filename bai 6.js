function findMedianSortedArrays(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return findMedianSortedArrays(arr2, arr1); // Đảm bảo arr1 luôn ngắn hơn arr2
    }

    const m = arr1.length;
    const n = arr2.length;
    const totalLength = m + n;
    const halfLength = Math.floor((m + n + 1) / 2);

    let low = 0;
    let high = m;

    while (low <= high) {
        const partition1 = Math.floor((low + high) / 2);
        const partition2 = halfLength - partition1;

        const maxLeft1 = partition1 === 0 ? -Infinity : arr1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : arr1[partition1];

        const maxLeft2 = partition2 === 0 ? -Infinity : arr2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : arr2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if (totalLength % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            high = partition1 - 1;
        } else {
            low = partition1 + 1;
        }
    }
    throw new Error("Input arrays are not sorted or are invalid.");
}

// Ví dụ sử dụng:
const ar1 = [1, 2, 5, 7, 8 , 9];
const ar2 = [3, 4, 6];

const median = findMedianSortedArrays(ar1, ar2);
console.log("Phần tử ở giữa là:", median);
