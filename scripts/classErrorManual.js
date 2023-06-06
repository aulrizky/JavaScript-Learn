class validationErrorMessage extends Error {
    constructor(message,field){
        super(message);
        this.field = field;
    }
}

class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new validationErrorMessage ("need more parameters !","numbers")
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
    console.info(MathUtil.sum());
    console.info("kode try akan berhenti");
}catch(error){
    if (error instanceof validationErrorMessage){
        console.error(`terjadi error di field ${error.field} dengan error ${error.message}`)
    }else{
        console.error(`error found: ${error.message}`);
    }
}finally{
    console.info(`end`);
}
console.info("the code is still working")
