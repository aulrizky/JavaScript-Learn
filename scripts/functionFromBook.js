const humus = function(factor) {
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1,"can","chickpeas");
    ingredient(0.25,"cup","tahini");
    ingredient(0.25,"cup","lemon juice");
    ingredient(1,"clove","garlic");
    ingredient(2, "tablespoon","olive oil");
    ingredient(0.5, "teaspoon","cumin");
};

// let launchMissiles = function(){
//     missileSystem.launch("now");
// };
// if (safeMode){
//     launchMissiles = function(){/*do nothing*/};
// };

// launchMissiles();

// function square(x){
//     return x * x;
// }
// console.log(square(2));

// console.log("the future says:", future());

// function future() {
//     return "You'll never have flying cars"
// }

// const power = (base, exponent) => {
//     let result = 1 ;
//     for (let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result;
// };

// console.log(power(2,3));
// const square = (x) => { return x * x; };
// const square2 = x => x * x;

// console.log(square(2));
// console.log(square2(2));

// const horn = () => {
//     console.log("heleh");
// };
// horn()

// function greet(who){
//     console.log("hello "+ who);
// }
// greet("harry");
// console.log("bye");

// function minus(a, b) {
//     if (b === undefined) return -a;
//     else return a - b;
// }

// console.log(minus(10));
// console.log(minus(10,5));

function power(base, exponent = 2){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(10));
console.log(power(2,6));
