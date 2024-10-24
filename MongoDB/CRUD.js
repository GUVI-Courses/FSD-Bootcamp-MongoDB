db.books.insertOne({"bookName":"java","author":"GUVI","publishedAt":"2024-07-15","cost":1500,"available":true})

db.books.insertOne({"bookName":"python","author":"GUVI","publishedAt":"2024-05-15","cost":2500,"available":true,"stock":500})

db.books.insertOne({"bookName":"html","author":"GUVI","publishedAt":"2024-06-15","cost":300,"available":true,"bid":101})

db.books.find() //select * from books;


db.books.insertMany(
    [
        {
            "bookName":"CSS",
            "author":"GUVI",
            "publishedAt":"2024-04-15",
            "cost":300,
            "available":true,
            "bid":102
        } ,
        {
            "bookName":"Mongodb",
            "author":"GUVI",
            "publishedAt":"2023-04-15",
            "cost":1300,
            "available":false,
            "bid":103
        } ,
        {
            "bookName":"CSS",
            "author":"GUVI",
            "publishedAt":"2024-07-11",
            "cost":3200,
            "available":true,
            "bid":104
        } 
        
    ]
)


db.books.find().pretty()

db.books.find({"bookName":"CSS"})
db.books.find({"available":false})

db.books.findOne({"bookName":"CSS"})
db.books.find({"cost":{$gt:1000}}).pretty()
db.books.find({"cost":{$lt:1000}}).pretty()




db.books.updateOne({_id:ObjectId('669552a66c3fc6a70cc4e49e')},{$set :{"rating":4}})
db.books.updateOne({bookName:"CSS"},{$set :{"rating":5,"cost":650}})
db.books.findOne({"bookName":"CSS"})
db.books.updateMany({bookName:"CSS"},{$set :{"rating":5,"cost":650}})

db.books.updateMany({},{$set:{location:"India"}})


// delete
db.books.deleteOne({"bookName":"html"})
db.books.deleteMany({"bookName":"CSS"})


db.books.replaceOne({
   _id: ObjectId('669552a66c3fc6a70cc4e49f')
},

{
    "bookName":"Mongodb official",
    "author":"Anees",
    "publishedAt":"2023-04-15",
    "cost":1400,
    "available":true,
    "bid":103
} 


)