//referencing

db.country.insertOne({
    name:"India",
    population:"150 CR"
})

db.capitalcity.insertOne({
    _id:ObjectId('66a19e31ade0aa40e1c4e49b'),
    city:"New Delhi"
})

db.capitalcity.findOne()
db.country.findOne()

// embedded document
db.country.insertOne({
    name:"America",
    population:"50CR",
    city:{
        "name":"boston"
    }
})

// {
//     _id:"joe",
//     name:"joe bookreader"
// }

// {
//     patron_id:"joe",
//     street:"154 street",
//     city:"faketon",
//     state:"nahn",
//     zip:5478254
// }

// {
//      _id:"joe",
//     name:"joe bookreader",
//     address:{
//         patron_id:"joe",
//         street:"154 street",
//         city:"faketon",
//         state:"nahn",
//         zip:5478254
// }
//     }
// }