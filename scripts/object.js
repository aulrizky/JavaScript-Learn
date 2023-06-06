function callObject(){
    var cars = [
        {
            id : 1,
            brand : 'toyota',
            name : 'avanza',
            status : 'available',

        },
        {
            id : 2,
            brand : 'honda',
            name : 'CR-V',
            status : 'available',
        }
    ]
    for (var i of cars){
        console.log(i.status)
    }
}
function objectHaveList(){
    let car = {
        brand : "toyota",
        name : 'avanza',
        year : [2000,2001,2002]
    }
    console.log(car.year[1])
}

function objProperty(price){
    let car = {
        brand : 'isuzu',
        name : 'panther',
        price: 1000,
    }
    car.price = price
    console.log(car.price)

}



function listToObject(){
    let apiGet = [1,"toyota","AE86","available",];
    let priceList = [1000,2000,5000,200000];
    let myAPI = {
        id : apiGet[0],
        brand : apiGet[1],
        name : apiGet[2],
        status :apiGet[3],
        price : priceList

    }
    let newApi = {}

    myAPI.color = "RED"
    console.log(myAPI)

}

function nestedObject(){
    let nota = {
        date : "2 april 20021",
        customerId : "a900811",
        listBelanja : {
            namaBarang : "kopi",
            harga : 30000,
        }
    }
    console.log(nota.listBelanja.namaBarang)
    for (x in nota){
        console.log(nota[x])
    }    

}

// callObject()
// objectHaveList()
// objProperty(5000)
nestedObject()
// listToObject()