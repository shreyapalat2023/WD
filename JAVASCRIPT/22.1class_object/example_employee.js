// Base class
class Employee {
    constructor(name,id) {
        this.name = name;
        this.id = id;
    }

    getDetails() {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

// Derived class
class Manager extends Employee {
    constructor(name,id,department) {
        super(name,id);
        this.department = department;
    }

    getDetails() {
        return `${super.getDetails()},Department : ${this.department}`
    }
}

// Derived class
class Developer extends Employee {
    constructor(name,id,language){
        super(name,id);
        this.language = language;
    }

    getDetails() {
        return `${super.getDetails()},Programming Language: ${this.language}`;
    }
}

const manger = new Manager("Alice", 101, "HR");

const developer = new Developer("Shreya",160,"JavaScript");

console.log(manger.getDetails());
console.log(developer.getDetails());