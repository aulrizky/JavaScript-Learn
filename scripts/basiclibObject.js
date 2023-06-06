// object freeze
const person = {
    firstName: 'John',
    lastName: 'Mandela'
};

// Object.freeze(person);

person.firstName = 'Ricky';
delete person.lastName;
console.info(person);

// object assign;

const target = {
    name: "Jones",
}
const source = {
    job : 'Warrior',
}

Object.assign(target, source);
console.info(target);

// property Name and value


const person2 ={
    name: "Jimmy",
    BasicLevel: 20
}

console.info(Object.values(person2));
console.info(Object.getOwnPropertyNames(person2));