db.inventory.insertMany([{ _id: 5, type: "food", item: "aaa", ratings: [ 5, 8, 9 ] },
{ _id: 6, type: "food", item: "bbb", ratings: [ 5, 9 ] },
{ _id: 7, type: "food", item: "ccc", ratings: [ 9, 5, 8 ] },
{ _id: 8, type: "food", item: "ddd", ratings: [ 9, 5 ] },
{ _id: 9, type: "food", item: "eee", ratings: [ 5, 9, 5 ] }])

db.inventory.createIndex({ratings:1})
db.inventory.find({ratings:[5,9]})



db.datas.insertMany([
    {
  _id: 1,
  item: "abc",
  stock: [
    { size: "S", color: "red", quantity: 25 },
    { size: "S", color: "blue", quantity: 10 },
    { size: "M", color: "blue", quantity: 50 }
  ]
},
{
  _id: 2,
  item: "def",
  stock: [
    { size: "S", color: "blue", quantity: 20 },
    { size: "M", color: "blue", quantity: 5 },
    { size: "M", color: "black", quantity: 10 },
    { size: "L", color: "red", quantity: 2 }
  ]
},
{
  _id: 3,
  item: "ijk",
  stock: [
    { size: "M", color: "blue", quantity: 15 },
    { size: "L", color: "blue", quantity: 100 },
    { size: "L", color: "red", quantity: 25 }
  ]
}

])

db.datas.createIndex({"stock.size":1,"stock.quantity":1})
db.datas.find({"stock.size":"M"})
db.datas.explain("executionStats").find({"stock.size":"M"})
db.datas.find({"stock.size":"S","stock.quantity":{$gt:20}})
db.datas.explain("executionStats").find({"stock.size":"S","stock.quantity":{$gt:20}})


db.datas.find().sort( { "stock.size": 1, "stock.quantity": 1 } )
db.datas.find( { "stock.size": "M" } ).sort( { "stock.quantity": 1 } )




-- Multikey Index Bounds
db.survey.insertMany(
   [
      { _id: 1, item: "ABC", ratings: [ 2, 9 ] },
      { _id: 2, item: "XYZ", ratings: [ 4, 3 ] }
   ]
)
db.survey.createIndex( { ratings: 1 } )
db.survey.find( { ratings : { $elemMatch: { $gte: 3, $lte: 6 } } } )


-- Taking the predicates separately:

-- the bounds for the greater than or equal to 3 predicate (i.e. $gte: 3) are [ [ 3, Infinity ] ];

-- the bounds for the less than or equal to 6 predicate (i.e. $lte: 6) are [ [ -Infinity, 6 ] ].

-- Because the query uses $elemMatch to join these predicates, MongoDB can intersect the bounds to:

-- The following query uses $elemMatch to require that the array contains at least one single element that matches both conditions:

db.survey.find( { ratings : { $gte: 3, $lte: 6 } } )

-- The query searches the ratings array for at least one element greater than or equal to 3 and at least one element less than or equal to 6. Because a single element does not need to meet both criteria, MongoDB does not intersect the bounds and uses either [ [ 3, Infinity ] ] or [ [ -Infinity, 6 ] ]. MongoDB makes no guarantee as to which of these two bounds it chooses.


db.contacts.insertOne({
    name:"ark",
    hobbies:["code","eat","sleep","repeat"],
    addresses:[
        {
            "street":"bangalore"
        },
        {
            "street":"RT nagar"
        }
    ]
})
db.contacts.find().pretty()
db.contacts.createIndex({hobbies:1})
db.contacts.explain("executionStats").find({hobbies:"code"})
db.contacts.createIndex({addresses:1})
db.contacts.explain("executionStats").find({"addresses.street":"bangalore"})
db.contacts.createIndex({"addresses.street":1})
db.contacts.explain("executionStats").find({addresses:"bangalore"})
db.contacts.createIndex({"addresses.street":1})
db.contacts.explain("executionStats").find({"addresses.street":"bangalore"})
//restriction

db.contacts.createIndex({name:1,hobbies:1})
db.contacts.createIndex({hobbies:1,addresses:1})

compound key with multiple index is possible with one array or one documment array
both multikey indexes is not possible