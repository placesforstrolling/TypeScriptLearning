"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking...');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking test...');
    }
}
let student = new Student(1, 'John', 'Legend');
console.log(student.getFullName());
//# sourceMappingURL=index.js.map