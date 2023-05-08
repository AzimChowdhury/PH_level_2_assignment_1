class Person {
    constructor(private name: string, private age: number) {

    }
    public getDetails() {
        return `${this.name} is ${this.age} years old. `
    }
}

class Student extends Person {
    constructor(name: string, age: number, private grade: string) {
        super(name, age)
    }

    public getGrade() {
        return `The student  got ${this.grade}`
    }
}

const newPerson = new Person('person1', 52)
const result1 = newPerson.getDetails()
console.log(result1);

const newStudent = new Student('person2', 17,'A+')
const result2 = newStudent.getGrade()
console.log(result2);