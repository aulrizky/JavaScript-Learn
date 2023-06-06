// foreach();
const array = ["aulia","Rizky","R"]

array.forEach(function(value,index) {
    console.info(`${index}: ${value}`);
})

array.forEach((value,index) => console.info(`${index}: ${value}`))
array.forEach(value => console.info(value));
// array queue push()nambah,shift()ngurang,

const queue = [];
queue.push("aulia");
queue.push("Rizky");
queue.push("R");

console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());

// array stack push() pop();


const stack = [];
stack.push("aulia");
stack.push("Rizky");
stack.push("R");

console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());

// array search
// find(value=>boolean):value mencari data sesuai kondisi
// findIndex(value=>boolean):number mencari data dengan index
// includex(value):boolean mengecek apakah ada data 
// indexOf(value):number mengecek posisi index
// lastIndexOf(value):number mengecek posisi index terakhir

// array filter
// filter(value=>boolean):array melakukan filyer data dengan kodisi yang bernilai true

const number = [1,2,3.4,5,6,7,8,9,10];
const ganji = number.filter(value=> value % 2 === 1);
const genap = number.filter(value=> value % 2 === 0);

console.info(number);
console.info(ganji);
console.info(genap);


// transform
// map
// reduce
// reduceRight


const names = "Aulia Rizky Rizaldy".split(" ");
console.info(names.map(value => value.toUpperCase()));

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.info(numbers.reduce((result,value) => result + value));
console.info(numbers.reduceRight((result,value) => result + value))


