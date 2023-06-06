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
function newSearchNames(){
    var data = [["test1","test2","test3"],
                ["pak","bu","dek"],
                ["kick","shit","crak"]];
    for (let i of data ){
        return console.log(i);
        for (let j of i){
            return console.log(j);
        }
        // return console.log(j);
    }
    // return console.log(j);
}
newSearchNames()