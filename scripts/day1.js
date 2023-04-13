// day 1 
// var ten = 10
// console.log(ten * ten)17777414865132

// var star = ""
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < i; j++) {
//         star += "*"
//     }
//     star += "\n"
// }

// console.log(star)
// for (var i = 0; i <15;i++) {
//     if (i % 3 == 0 && i % 5 == 0)
//     console.log("fizzbuzz")
//     else if (i %5==0)
//     console.log("buxx")
//     else if (i % 3 == 0) 
//     console.log("fizz")
// }

// console.log(i)

// var square = function(x) {
//     return x * x;
// };
// console.log(square(10));

// let number = 0;
// while (number < 10) {
//     console.log(number );
//     number += 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result *= 2;
//     counter += 1;
// }
// console.log(result);
// console.log(counter);


// let yourName;
// do{
//     yourName = prompt("who are you ?")
// }while(!yourName);
// console.log(yourName)

// if (false != true) {
//     console.log("That makes sense");
//     if (1<2) {
//         console.log("not surprise there")
//     }
// }

// for (let number = 0; number <=12; number +=2){
//     console.log(number)
// }

// let result = 1;
// for (let counter = 0;counter <10;counter +=1){
//     result *= 2;
// }
// console.log(result)

// for (let current = 20; ;current += 1){
//     if(current % 7 ==0){
//         console.log(current);
//         break;
//     }
// }

// switch(prompt("what is the weather like?")){
//     case "rainy":
//         console.log("remember to bring umbrella");
//     case "sunny":
//         console.log("dress lightly");
//     case "cloudy":
//         console.log("go outside");
//         break;
//     default:
//         console.log("unknown weather type");
//         break;
// }

// let theNumber = Number(prompt("pick a number"));
// console.log("your number is the suquare root of " + theNumber * theNumber);

// let nilai = false;

// if (2+2 == 4){
//     nilai = true;
// }
// console.log(nilai);

// function testOne(kata){
//     console.log("test one " + kata);
// }
// testOne("cukup");

// let word = ["kata","word","check"]
// let a = [1,2,3,4,5,6]
// // console.log (word.length)
// // console.log(word[1])

// for (i = 0; i < word.length; i += 1){
//     // console.log(i)
//     // console.log(word[i])
//     if (word[i]=="kata"){
//         console.log("find the word")
//     }
//     else{
//         console.log(word[i]);
//     }
// }

function searchNames(){
    var data = [["test1","test2","test3"],
                ["pak","bu","dek"],
                ["kick","shit","crak"]];
    for (i = 0; i < data.length; i+=1){
        // console.log(data[i])
        for (j = 0 ; j < data[i].length;j++){
            // console.log(data[i][j])
            for(k = 0; k < data[i][j].length; k++){
                var hurufKapital = data[i][j].charAt(0).toUpperCase() + data[i][j].slice(1)
            
            }
            console.log(hurufKapital)
        }
    }
}
searchNames();

// for of
