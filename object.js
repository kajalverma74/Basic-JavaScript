const students ={
    fullName : "kajal",
    marks: 89,
    printMarks(){
        console.log("marks ", this.marks);
    }
};

console.log(students);
students.printMarks();

const employee = {
    calcTax() {
        console.log("Tax is 10%");
    }
};

console.log(employee.calcTax());


const Karan = {
    salary: 1000,
    calcTax() {
        console.log("Tax is 30%");
    }
};
console.log(Karan);

Karan.__proto__ = employee;
console.log(Karan.calcTax());


