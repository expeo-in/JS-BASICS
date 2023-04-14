import { Employee, holidays, Department,  age as employeeAge} from "./employee.js";
// import * as emp from "./employee.js"; //Import all members
import message, {messageSuccess} from "./message.js";


// console.log(emp.holidays);
// const age = 10;
// console.log("employeeAge", employeeAge);

const e1 = new Employee("ganesh", 20);
e1.display();
e1.calculateSalary();
console.log(e1.salary);


// // e1.salary = 5000;
// // console.log(e1.salary);

// console.log(holidays);


// const d1 = new Department("development");
// d1.display();

// console.log(message);
// console.log(messageSuccess);