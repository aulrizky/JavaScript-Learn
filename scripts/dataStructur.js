// let listOfNumbers = [2,3,5,7,11];
// console.log(listOfNumbers[2]);

// console.log(listOfNumbers[0]);

// let doh = "DOH";
// console.log(typeof doh.toUpperCase);
// console.log(doh.toUpperCase())


// let sequence = [1,2,4];
// sequence.push(2);
// sequence.push(55);

// console.log(sequence);

// sequence.pop();
// console.log(sequence);


// sequence.push("market");

// console.log(sequence);

// let day1 = {
//     squirel : false,
//     events : ["work", "touched tree", "pizza", "running"]
// }
// let hungryLevel = "10%"
// console.log(day1);
// console.log(day1.squirel);
// day1.events.push("peanut");
// console.log(day1)
// day1.login = true;
// day1.date = "1 may 2022";
// console.log(day1);
// day1.hungryLevel = hungryLevel
// console.log(day1);
let score = {
    visitor : 0,
    home : 0,
}

// function goalVisitor(goal){
//     // goalVisitor => score.visitor + 1
//     // score.visitor = goalVisitor();
//     score.visitor +=1;
//     console.log("visitor point!");
//     console.log(score);
// }
// goalVisitor();

let journal = [];

// function addEntry(events, squirel) {
//     journal.push({events,squirel});

// }

// addEntry(["work", "peanut","pizza","running"],false);
// addEntry(["work","ice cream", "peanut","lasagna"],true);

// console.log(journal)

// function phi(table){
//     return (table[3] * table[0] - table[2] * table[1])/ 
//     Math.sqrt((table[2] + table[3]) * 
//     (table[0] + table[1]) * 
//     (table[1] + table[3]) * 
//     (table[0] + table[2]))
// };

// console.log(phi([76, 9, 4, 1]));

// function tableFor(event,journal) {
//     let table = [0, 0, 0, 0];
//     for (let i = 0; i < journal.length; i++) {
//         let entry = journal[i], index = 0;
//         if (entry.event.includes(event)) index += 1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1;
//         // return table;

// }
// return table;
// }
// console.log(tableFor('pizza', 'JOURNAL'));


// let kim = "KIM"; age = 88;
// console.log(kim.age)

// console.log('coconuts'.slice(4,7))
// console.log('coconuts'.split(2))
// console.log('coconuts'.indexOf('u'))

// console.log(String(123).padStart(9,'0'))

let sentence = "lorem ipsum dolor sit amet consectetur"
// let word = sentence.split(" ");
// console.log(word)

// console.log(word.join(" "))

// function swapWord(word){
//     let split = word.split(" ");
//     swapElement(split,0,1)
//     // for (a in split) {
//     //     swapWord(split[a]);
//     //     console.log(split[a]);

//     // }
// }

// console.log(swapWord('lorem ipsum dolor sit amet consectet'));

function max(...listOfNumbers){
    let result = -Infinity;
    for (let number of listOfNumbers){
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4,1,9,1))