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
