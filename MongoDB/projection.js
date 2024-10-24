Projection operators

1) $ (projection)


db.collection.find( { <array>: <condition> ... },
                    { "<array>.$": 1 } )
db.collection.find( { <array.field>: <condition> ...},
                    { "<array>.$": 1 } )


db.students.insertMany([
    { "_id" : 1, "semester" : 1, "grades" : [ 70, 87, 90 ] },
{ "_id" : 2, "semester" : 1, "grades" : [ 90, 88, 92 ] },
{ "_id" : 3, "semester" : 1, "grades" : [ 85, 100, 90 ] },
{ "_id" : 4, "semester" : 2, "grades" : [ 79, 85, 80 ] },
{ "_id" : 5, "semester" : 2, "grades" : [ 88, 88, 92 ] },
{ "_id" : 6, "semester" : 2, "grades" : [ 95, 90, 96 ] }
])


db.students.find({
    semester:1,grades:{
        $gte:90
    }
})
db.students.find({
    semester:1,grades:{
        $gte:100
    }
})

db.students.insertMany([
    { "_id" : 7, semester: 3, "grades" : [ { grade: 80, mean: 75, std: 8 },
                                       { grade: 85, mean: 90, std: 5 },
                                       { grade: 90, mean: 85, std: 3 } ] },

{ "_id" : 8, semester: 3, "grades" : [ { grade: 92, mean: 88, std: 8 },
                                       { grade: 78, mean: 90, std: 5 },
                                       { grade: 88, mean: 85, std: 3 } ] }
])



db.students.find(
    {"grades.mean":{$gt:70}},
    {"grades.$":1}
)
db.students.find(
    {"grades.mean":{$lt:85}},
    {"grades.$":1}
)

2. $elemMatch



db.schools.insertMany([
    {
 _id: 1,
 zipcode: "63109",
 students: [
              { name: "john", school: 102, age: 10 },
              { name: "jess", school: 102, age: 11 },
              { name: "jeff", school: 108, age: 15 }
           ]
},
{
 _id: 2,
 zipcode: "63110",
 students: [
              { name: "ajax", school: 100, age: 7 },
              { name: "achilles", school: 100, age: 8 },
           ]
},
{
 _id: 3,
 zipcode: "63109",
 students: [
              { name: "ajax", school: 100, age: 7 },
              { name: "achilles", school: 100, age: 8 },
           ]
},
{
 _id: 4,
 zipcode: "63109",
 students: [
              { name: "barney", school: 102, age: 7 },
              { name: "ruth", school: 102, age: 16 },
           ]
}
])

db.schools.find( { zipcode: "63109" },
                 { students: { $elemMatch: { school: 102 } } } )


db.schools.find( { zipcode: "63109" },
                 { students: { $elemMatch: { school: 102, age: { $gt: 10} } } } )


3)$slice (projection)

db.collection.find(
   <query>,
   { <arrayField>: { $slice: <number> } }
);


db.posts.insertMany([
   {
     _id: 1,
     title: "Bagels are not croissants.",
     comments: [ { comment: "0. true" }, { comment: "1. croissants aren't bagels."} ]
   },
   {
     _id: 2,
     title: "Coffee please.",
     comments: [ { comment: "0. fooey" }, { comment: "1. tea please" }, { comment: "2. iced coffee" }, { comment: "3. cappuccino" }, { comment: "4. whatever" } ]
   }
])


db.posts.find( {}, { comments: { $slice: 3 } } )
db.posts.find( {}, { comments: { $slice: -3 } } )
db.posts.find( {}, { comments: { $slice: [ 1, 3 ] } } )
db.posts.find( {}, { comments: { $slice: 0 } } )
db.posts.find( {}, { comments: { $slice: 1 } } )