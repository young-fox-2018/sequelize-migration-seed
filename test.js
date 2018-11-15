let fs  = require(`fs`)
let data = fs.readFileSync(`./addresses.csv`, `utf8`)
data = data.split(`\n`)
data = data.slice(0, data.length - 1)
let arrTemp = []
let result = []

for (let i = 0; i < data.length; i++) {
    arrTemp.push(data[i].split(`,`))
}

for (let i = 0; i < arrTemp.length; i++) {
    let obj = {}
    obj = {
        name: arrTemp[i][1],
        email: arrTemp[i][2],
        phone: arrTemp[i][3]
    }
    result.push(obj)
    
}
console.log(result);
