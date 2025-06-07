const fs = require("fs")
const jsonFile = JSON.parse(fs.readFileSync("./sales.json","utf8"))

var category = {}

jsonFile.forEach(element => {
    if(category[element.category]){
        category[element.category] += element.quantity_sold
    }
    else{
        category[element.category] = element.quantity_sold
    }
});

console.log(category)

const jsonData = JSON.stringify(category)
console.log("New json: ",jsonData)

fs.writeFileSync("./sales_output.json",jsonData)
