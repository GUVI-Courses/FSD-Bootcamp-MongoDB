Understanding the text indexes

db.products.insertMany([
    {
       productName:"Camera",
       description:"the best camera in the india and it has very clear pixels and supports potrait"
    },
    {
        productName:"Shoes",
        description:"this show is pretty awesome and best in the india"
    }
])
db.products.find()

db.products.createIndex({description: "text"})  //create the text index store all keys in array index
db.products.find({$text:{$search:"best"}}).pretty()
db.products.find({$text:{$search:"camera"}}).pretty()
db.products.find({$text:{$search:"camera best" }}).pretty()
db.products.find({$text:{$search:"\"best camera\"" }}).pretty() 
db.products.explain("executionStats").find({$text:{$search:"\"best camera\"" }}).pretty() 

//faster than regular expression

//scores of each object to sort the relevent data

db.products.find({$text:{$search:"camera best" }},{score:{$meta:"textScore"}}).pretty()
db.products.find({$text:{$search:"camera best" }},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}}).pretty()

db.products.createIndex({productName:"text"}) //we can have only one text index

db.products.dropIndex("description_text")

//creating a combine text index

db.products.createIndex({title:"text",description:"text"})
db.products.insertOne({
    productName:"laptop",
    description:"Best laptop in the market"
})
db.products.insertOne({
    productName:"shirts",
    description:"Best t-shirts in the market"
})
db.products.find({$text:{$search:"laptop" }})

//how to exclude the words

db.products.find({$text:{$search:"Best -t-shirts" }}).pretty()

db.products.getIndexes()
db.products.dropIndex("title_text_description_text")


db.products.createIndex({productName:"text",description:"text"},{default_language:"english",weights:{productName:1,description:10}})

//giving weights
db.products.find({$text:{$search:"camera",$language:"german"}})
db.products.find({$text:{$search:"camera",$language:"english"}})

db.products.find({$text:{$search:"camera best" }},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}}).pretty()
db.products.dropIndex("productName_text_description_text")
db.products.createIndex({title:"text",description:"text"})
db.products.find({$text:{$search:"camera best" }},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}}).pretty()

//building indexes

1. foreground
2. background

conn = new Mongo();
db = conn.getDB("credit");

for (let i = 0; i < 10; i++) {
    db.ratings.insertOne({
        "person_id": i + 1,
        "score": Math.random() * 100,
        "age": Math.floor(Math.random() * 70) + 18 
    })
}
use credit
db.ratings.findOne()
db.ratings.createIndex({age:1})
db.ratings.explain("executionStats").find({age:{$gt:80}})
db.products.dropIndex({age:1})
db.ratings.explain("executionStats").find({age:{$gt:80}}) //double as long took

open new sql create index again and run find command in another  db.ratings.findOne()
first it creates the indexes creating after it will do the find jobs