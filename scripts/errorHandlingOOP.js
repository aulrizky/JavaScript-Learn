class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new Error ("need more parameters !")
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
    }
    return result
    }
}

// console.info (MathUtil.sum());
console.info (MathUtil.sum(1,2,3,4,5));
console.info("eko");

try {
    console.info(MathUtil.sum(1,1,1));
    console.info("kode try akan berhenti");
}catch(error){
    console.error(`error found: ${error.message}`);

}finally{
    console.info(`end`);
}
console.info("the code is still working")

class Counter {
    #counter = 0 ;

    next(){
        try{
            return this.#counter++;
        }catch{
            this.#counter++;
        }
    }
}
const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());