// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// };

// function Rabbit(type) {
//     this.type = type;
// };
// Rabbit.prototype.speak = function (line) {
//     console.log(`the ${this.type } rabbit says ${line}`);
// };

// let weirdRabbit = new Rabbit("weird");
// weirdRabbit.speak("fuck off!");  
// console.log(weirdRabbit);


// CLASS NOTATION 

class Rabbit {
    constructor (type,sex){
        this.type = type;
        this.sex = sex;
    }
    speak(line) {
        console.log(`the ${this.type} status ${this.sex} rabbit says "${line}" `);
    }
}

let redRabbit = new Rabbit("red","female");
let blackRabbit = new Rabbit("black","male");

redRabbit.speak("all hail blackRabbit");
blackRabbit.speak("king and queens all dead");

let object = new class { getWord(){ return "hello"}};
console.log(object.getWord());

Rabbit.prototype.teeth = "small";
console.log(redRabit.teeth);