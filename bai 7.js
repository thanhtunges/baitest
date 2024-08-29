class Student {
    constructor(name, age, math, physical, chemistry) {
        this.name = name;
        this.age = age;
        this.math = math;
        this.physical = physical;
        this.chemistry = chemistry;
        this.avg = this.calculateAvg();
        this.rank = this.determineRank();
    }

    // TB
    calculateAvg() {
        return (this.math + this.physical + this.chemistry) / 3;
    }

    // XH
    determineRank() {
        if (this.avg >= 8.0) return "GIOI";
        else if (this.avg >= 6.5) return "KHA";
        else if (this.avg >= 5.0) return "TB";
        else return "YEU";
    }

    //
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Math: ${this.math.toFixed(2)}, Physical: ${this.physical.toFixed(2)}, Chemistry: ${this.chemistry.toFixed(2)}, Avg: ${this.avg.toFixed(2)}, Rank: ${this.rank}`;
    }
}
class ManagerStudent {
    constructor() {
        this.students = [];
    }

    // Add
    addStudent(student) {
        this.students.push(student);
    }

    // Search
    findStudentByName(name) {
        return this.students.find(student => student.name.toLowerCase() === name.toLowerCase()) || null;
    }

    // rank "GIOI"
    getExcellentStudents() {
        return this.students.filter(student => student.rank === "GIOI");
    }
}

//
const manager = new ManagerStudent();

// Adding
manager.addStudent(new Student('Tung', 20, 8, 7, 9));
manager.addStudent(new Student('Ban', 22, 5, 6, 5));
manager.addStudent(new Student('Chinh', 21, 7, 8, 7));
manager.addStudent(new Student('Duy', 23, 9, 9, 10));
manager.addStudent(new Student('Duy', 24, 6, 5, 6));
manager.addStudent(new Student('Duong', 20, 8, 8, 8));
manager.addStudent(new Student('Hanh', 22, 5, 6, 7));
manager.addStudent(new Student('Hanh', 21, 4, 5, 5));

//
console.log(manager.findStudentByName('Tung'));

//
console.log(manager.getExcellentStudents());

//
console.log(manager.students);
