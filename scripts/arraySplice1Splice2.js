function arraySplice(){
       let kota = ['jogja',"jakarta","surabaya","bandung"];
       kota.splice(1,0,'malang');
       return kota;
}

function arraySplice2(){
    let kota = ['jogja',"jakarta","surabaya","bandung"];
    kota.splice(1,1);
    return kota;

}

function arrayUnshift(){
    let kota = ['jogja',"jakarta","bali","bandung"];
    kota.unshift("makasar");
    return kota;
}

console.log(arraySplice());
console.log(arraySplice2());
console.log(arrayUnshift());
