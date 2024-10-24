-- without compound field index and used single one

db.users.createIndex({gender:1})
db.users.explain("executionStats").find({"gender":{$eq:'male'}})

-- compound create index
db.users.createIndex({"dob.age":1,gender:1})
db.users.getIndexes()
db.users.dropIndex({gender:1})
db.users.getIndexes()

db.users.explain().find({"dob.age":45,gender:"male"})
db.users.explain("executionStats").find({"dob.age":45,gender:"male"})
db.users.explain("executionStats").find({"dob.age":{$gt:60}})

db.users.explain("executionStats").find({"gender":{$eq:'male'}}) //it uses the collection scan because order matters here in compound index


db.users.explain("executionStats").find({gender:"male","dob.age":45})

//sortings

db.users.explain("executionStats").find({"dob.age":45}).sort()
db.users.explain("executionStats").find({"dob.age":45}).sort({gender:1})


db.users.explain("executionStats").find({"dob.age":{$gt:45}}).sort()
db.users.explain("executionStats").find({"dob.age":{$gt:45}}).sort({gender:1})



-- dob.age_1_gender_1
db.users.dropIndex("dob.age_1_gender_1")


db.users.createIndex({"dob.age":1,gender:1})


//configuring the getIndexes
db.users.createIndex({email:1},{unique:true})
db.users.find({email:"abigail.clark@example.com"})

//can help to store unique values in collections

//partial filters
db.users.getIndexes()
db.users.createIndex({"dob.age":1},{partialFilterExpression:{gender:"male"}})
db.users.find({"dob.age":{$gt:60}}) 
db.users.explain("executionStats").find({"dob.age":{$gt:60}}) 


'''even we have created a index male, female 
data also we are able to see it. becuz it doesnt want to loose data so its cares partially it performed the index scan'''


db.users.explain("executionStats").find({"dob.age":{$gt:60},gender:"male"})  

//performed inx scan and gives data neatly

//partial filter
db.friends.insertMany([
    {
        name:"ane",
        email:"arkprocoder@gmail.com"
    },
    {
        name:"naz"
    }
])

db.friends.createIndex({email:1})
db.friends.dropIndex({email:1})
db.friends.createIndex({email:1},{unique:true})
db.friends.getIndexes()

db.friends.insertOne(
    {
        name:"ane",
        email:"arkprocoder@gmail.com"
    }
  
)


db.friends.insertOne(
    {
        name:"naz",
        email:"naz@gmail.com"
    }
  
)

db.friends.dropIndex({email:1})

db.friends.createIndex({email:1},{unique:true,partialFilterExpression:{email:{$exists:true}}})

db.friends.insertOne(
    {
        name:"ane",
        email:"arkprocoder@gmail.com"
    }
  
)

//TTL index time to live

db.sessions.insertOne({data:"arkprocoder",createdAt: new Date()})
db.sessions.find().pretty()
db.sessions.createIndex({createdAt:1},{expireAfterSeconds:10}) 
db.sessions.insertOne({data:"ark",createdAt: new Date()})
db.sessions.insertOne({data:"guvi",createdAt: new Date()})
//it works on date object not works in compound index



Query Diagnosis & Query Planning
1.explain()
a. queryPlanner : show summary for executed Query + Winning Plan
b. executionStats : show summary for executed Query + Winning Plan + rejected plans
b. allPlansExecution : show summary for executed Query + Winning Plan + winning plan decision process


millisecondProcess : index scan and collection scan


db.customers.insertMany([
    {
    name:"ark",
    email:"ark@gmail.com",
    password:"*******"
},
    {
    name:"ane",
    email:"ane@gmail.com",
    password:"*******"
}

])

db.customers.explain("executionStats").find()
db.customers.explain("executionStats").find({name:"ark"},{_id:0,name:1})

//when mongodb rejects the plan

db.customers.createIndex({email:1,name:1})
db.customers.getIndexes()
db.customers.explain().find({name:"ark",email:"ark@gmail.com"})
db.customers.insertOne({
    name:"ark"
})
db.customers.insertOne({
    name:"guvi"
})
db.customers.explain("executionStats").find({name:"guvi",email:"ark@gmail.com"})
db.customers.find({name:"guvi",email:"ark@gmail.com"})
db.customers.explain("executionStats").find({name:"guvi"})