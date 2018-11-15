const fs = require("fs")

let data = fs.readFileSync('./addresses.csv','utf-8')
let data2 = data.split("\n")
let objData = []
for( let i = 0; i < data2.length; i++){
    if(data2[i].length !== 0){
        dataSplit = data2[i].split(",")
        // console.log(dataSplit)
        let obj = {
            street: dataSplit[1].trim(),
            city: dataSplit[2].trim(),
            zip_code: dataSplit[3].trim(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        objData.push(obj)
    }
}
console.log(objData)