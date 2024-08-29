class DrawAnyShape {
    drawShape(height) {
        if (height % 2 === 0) {
            height += 1;
        }

        const mid = Math.floor(height / 2);

        // Vẽ nửa trên của hình thoi
        for (let i = 0; i <= mid; i++) {
            let line = '';

            // Thêm khoảng trắng trước các ký tự '*'
            for (let j = 0; j < mid - i; j++) {
                line += ' ';
            }

            // Thêm các ký tự '*' tại hai đầu dòng
            line += '*';
            if (i > 0) {
                line += ' '.repeat(2 * i - 1) + '*';
            }

            console.log(line);
        }

        // Vẽ nửa dưới của hình thoi
        for (let i = mid - 1; i >= 0; i--) {
            let line = '';

            // Thêm khoảng trắng trước các ký tự '*'
            for (let j = 0; j < mid - i; j++) {
                line += ' ';
            }

            // Thêm các ký tự '*' tại hai đầu dòng
            line += '*';
            if (i > 0) {
                line += ' '.repeat(2 * i - 1) + '*';
            }

            console.log(line);
        }
    }
}

// Sử dụng ví dụ:
const shape = new DrawAnyShape();
shape.drawShape(12);
