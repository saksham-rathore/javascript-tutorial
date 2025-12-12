 const student = {
    fullname: "sam rathore",
    marks: 934.2,
    printmarks: function () {
        console.log("mark = ", this.marks); //this means student 
    }
 }

 const employee = {
    calcTax() {
        console.log("tax rate is 10%")
    },
 };

 const karan = {
    salary: 5000,
    calctax() {
        console.log("tax rate is 20%");
    },
 };
 karan.__proto__= employee;


// class toyotacar {
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new toyotacar();
// let mercedes = new toyotacar();


class toyotacar {
    constructor(brand) {
        console.log("creating new object");
        this.brand = brand;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new toyotacar("fortuner") //constructor 

class parent {
    hello() {
        console.log("hello");
    }
}

class child extends parent {}
let obj = new child();