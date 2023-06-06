let ssges = {
    Boris : 39,
    Lian : 22,
    Julia : 29
};

// console.log(`julia is ${ages['Julia']}`)
// console.log(`is Jack's age known`,"Jack" in ages);
// let ages = new Map();
// ages.set('Julia',30);
// ages.set('lian',79);
// ages.set('Lia',66);
// console.log(ages);
// console.log(ssges);

class Matix {
    constructor(width, height, element = (x,y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0 ; y < height ; y++) {
            for (let x = 0 ; x < width ; x++){
                this.content[y * width + x] = element(x,y);
            }
    }

    }
    get(x,y) {
    return this.content [y * width + x]
    }
    set(x,y,value) {
    this.content[y * width + x] = value
    }
}



