db.records.insertOne({
    _id:1,
    score:1034,
    location:{state:"NY", city:"New York"}
})
db.records.getIndexes()
db.records.createIndex({score:1})

db.records.explain().find()

db.records.explain().find({score:{$gt:100}})

db.records.explain().find({"location.state":"NY"})

-- create an index scan for embedded document
db.records.createIndex({
    "location.state":1
})

-- import the persons.json record through mongodb compass
use persons;
db.users.findOne()

db.users.find({"dob.age":{$gt:60}}).count()
db.users.find({"gender":{$eq:'male'}}).count()
db.users.find({"gender":{$eq:'female'}}).count()


db.users.explain("executionStats").find({"gender":{$eq:'male'}}).count()
db.users.explain("executionStats").find({"gender":{$eq:'male'}})
db.users.explain("executionStats").find({"dob.age":{$gt:60}}) 
-- //10 milis

db.users.createIndex({"dob.age":1})
db.users.createIndex({"gender":1})

db.users.getIndexes()

db.users.explain("executionStats").find({"gender":{$eq:'male'}})
db.users.explain("executionStats").find({"dob.age":{$gt:60}}) 
-- //3 milis

db.users.dropIndex("gender_1")