//1.

let loop = (times = 0, callback = null) => {
    if (callback === null) {
        console.log("значение callback не присвоено");
    } else {
        for (let i = 0; i < times; i++) {
            callback();
        }
}
};

let num = () => {
    console.log("test");
};

loop();
loop(3, num);


//2.

let calculateArea_Rectangle = (a, b) => {
    const Figure = {area: a * b, figure: "Прямоугольник", input: {a, b}};
    console.log(Figure);
};

calculateArea_Rectangle(4, 3);


//3.

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
    displayInfo() {
        return "Name = " + this.name + "; Age = " + this.age + "; Date of birth = " + this.dateOfBirth;
    }
}

console.log(new Human("Vasya", 37, "20.05.80").displayInfo());

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
    displayInfo() {
        return super.displayInfo() + "; Salary = " + this.salary + "; Department = " + this.department;
    }
}

console.log(new Employee("Vasya", 37, "20.05.80", 5, "React JS").displayInfo());

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = [];
    }
    add(developer) {
        if (developer.manager === this) {
            return;
        }
        if (developer.manager) {
            developer.manager.delete(developer);
        }
        this.developers.push(developer);
        developer.setManager(this);

    }
    delete(developer) {
        for (let i = 0; i < this.developer.length; i++) {
            if (developer === this.developer[i]) {
                this.developer.splice(i, 1);
                developer.manager = undefined;
                return;
            }
        }
    }
    displayInfo() {
        return super.displayInfo() + "; Manager of " + this.developers.length + " developer(s)";
    }
}

var managerVasya = new Manager("Vasya", 37, "20.05.80", 5, "React JS");
console.log(managerVasya.displayInfo());

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }
    setManager(manager) {
        manager.add(this);
    }
    displayInfo() {
        return super.displayInfo() + "; Manager is " + (this.manager ? this.manager.name : "undefined");
    }
}

var developerPetya = new Developer("Petya", 27, "20.05.90", 4, "React JS");
console.log(developerPetya.displayInfo());

var developerKolya = new Developer("Kolya", 27, "20.05.90", 4, "React JS", managerVasya);
console.log(developerKolya.displayInfo());







