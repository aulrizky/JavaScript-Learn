// let rabbit = {};
// rabbit.speak = function(line){
//     console.log(`the rabbit says '${line}'`);

// };

// rabbit.speak("i need money");

// function speak(line) {
//     console.log(`the ${this.type} says '${line}'`);
// };

// let greyRabbit = {type:"GREY",speak};
// let hungryLevel = {type:"hungry",speak};

// greyRabbit.speak("omg i need money right now" + ", i need to buy a leptop");

// speak.call(hungryLevel,`ngelih`);


// function normalize(){
//     console.log(this.coords.map(n => n/this.length));
// }

// normalize.call({coords:[0,2,3],length : 5});

let empty = {};
console.log(empty.toString);
console.log(empty.toString());
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf));

let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}' `)
    }
};

let killerRabit = Object.create(protoRabbit);
killerRabit.type = "Killer";
killerRabit.speak("SKREEE");