const holidays = 10;
const age = 30;

let _salary = 0;
let _privateMethodName = Symbol();


// private members using symbol
// class Employee {
//     constructor(name, hoursWorked) {
//         this.name = name;
//         // this.salary = 0;
//         this.hoursWorked = hoursWorked;
//     }

//     display() {
//         console.log("employee", this.name);
//         this[_privateMethodName]();
//     }

//     calculateSalary() {
//         // this.salary = 100 * this.hoursWorked;
//         _salary = 100 * this.hoursWorked;
//     }

//     get salary() {
//         return _salary;
//     }

//     // [_privateMethodName]() {
//     //     console.log("private method");
//     // }
// }

class Employee {
    #salary;

    constructor(name, hoursWorked) {
        this.name = name;
        this.#salary = 0;
        this.hoursWorked = hoursWorked;
    }

    display() {
        this.#details();
        console.log("display", this.name);
    }

    #details() {
        console.log("details");
    }

    calculateSalary() {
        this.#salary = 100 * this.hoursWorked;
        
    }

    get salary() {
        return this.#salary;
    }
}


class Department {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log("department", this.name);
    }
}

export {
    holidays,
    age,
    Employee,
    Department
}