class Employee{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    // this.isU = function(){
    //     console.info(`hallo ${this.firstname} ${this.lastname}`)
    // }
}
    sayhallo(firstname, lastname){
    console.info(`hallo ${this.firstname} ${this.lastname} as employee`)
    }
}

class Manager extends Employee{

    constructor(firstname, lastname){
        super(firstname);
        this.lastname = lastname;
    }
    sayhallo(firstname, lastname){
        console.info(`hallo ${this.firstname} ${this.lastname} `
    )}

 
}


// class Employee {
//     sayHallo(name){
//         console.info(`hello ${name}, my position is employe`);
//     }
// }
// class Manager extends Employee{
//     sayHallo(name){
//         console.info(`hello ${name}, my position is manager`);
// }
// }

// let budi = new Employee();
// budi.name = "Budi";
// budi.sayHallo(budi.name);

// let eko = new Manager();
// eko.name = "Eko";
// eko.sayHallo(eko.name);

// console.info(budi);
// console.info(eko);