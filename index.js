const fs = require("fs")
const contactPath = "/home/cascade/Documents/hacktiv8immersive/phase1reload/week3/day4/sequelize-migration-seed/contacts.csv"
let data = fs.readFileSync(contactPath, "utf8")
data = data.split("\n")
let doc = []
data.forEach(element => {
    let split = element.split(",")
    let obj = {
        name:split[1],
        email:split[2],
        phone:split[3]
    }
    doc.push(obj)
});

console.log(doc)