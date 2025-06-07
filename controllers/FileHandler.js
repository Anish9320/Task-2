const HandleFiles = (req, res) => {
    const { base64 } = req.body || {};
    if(!base64){
        console.log(base64)
        return res.status(200).send({message: 'Please upload File data.'})
    }
    const StringData = atob(base64) //->
    const jsonData = JSON.parse(StringData) || []
    console.log(jsonData)

    var category = {}

    jsonData.forEach(element => {
        if(category[element.category]){
        category[element.category] += element.quantity_sold
    }
    else{
        category[element.category] = element.quantity_sold
    }
    });
    console.log("Final Result: "+category)
    const stringJson = JSON.stringify(category)
    console.log(btoa(stringJson)) //->json to base64
    return res.status(200).send({data: btoa(stringJson)})
}

module.exports = { HandleFiles }