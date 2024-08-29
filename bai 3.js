class MyString {
    constructor(s) {
        this.s = s;
    }

    // a. Tính tổng bảng mã ASCII của các ký tự trong chuỗi
    sumAscii() {
        return [...this.s].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    }

    // b. Tính tổng bảng mã ASCII của các ký tự in hoa trong chuỗi
    sumUppercaseAscii() {
        return [...this.s]
            .filter(char => char >= 'A' && char <= 'Z')
            .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    }

    // c. Liệt kê các ký tự có số lần xuất hiện nhiều hơn n lần
    charCountMoreThan(n) {
        const charCount = [...this.s].reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});

    return Object.entries(charCount)
            .filter(([char, count]) => count > n)
            .reduce((result, [char, count]) => {
                result[char] = count;
                return result;
            }, {});
    }

    // d. Tìm chuỗi con dài nhất có trong s1 và s2
    static longestCommonSubstring(s1, s2) {
        let maxLen = 0;
        let endingIndex = 0;
        const len1 = s1.length;
        const len2 = s2.length;
        const table = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    table[i][j] = table[i - 1][j - 1] + 1;
                    if (table[i][j] > maxLen) {
                        maxLen = table[i][j];
                        endingIndex = i;
                    }
                }
            }
        }

        return s1.slice(endingIndex - maxLen, endingIndex);
    }
}

// Ví dụ

const s = new MyString("Hello programers. Im Developer");

// a
console.log("Tổng mã ASCII:", s.sumAscii());

// b
console.log("Tổng mã ASCII của ký tự in hoa:", s.sumUppercaseAscii());

// c
console.log("Ký tự xuất hiện hơn 2 lần:", s.charCountMoreThan(2));

// d
const s1 = "abcdfgh";
const s2 = "abdfghijk";
console.log("Chuỗi con chung dài nhất:", MyString.longestCommonSubstring(s1, s2));
