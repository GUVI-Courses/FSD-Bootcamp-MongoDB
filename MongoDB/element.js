db.records.insertMany([
    { a: 5, b: 5, c: null },
{ a: 3, b: null, c: 8 },
{ a: null, b: 3, c: 9 },
{ a: 1, b: 2, c: 3 },
{ a: 2, c: 5 },
{ a: 3, b: 2 },
{ a: 4 },
{ b: 2, c: 4 },
{ b: 2 },
{ c: 6 }
])

db.records.find( { a: { $exists: true } } )

db.records.find( { b: { $exists: false } } )

db.addressBook.insertMany(
    [
       { "_id" : 1, address : "2030 Martian Way", zipCode : "90698345" },
       { "_id" : 2, address: "156 Lunar Place", zipCode : 43339374 },
       { "_id" : 3, address : "2324 Pluto Place", zipCode: NumberLong(3921412) },
       { "_id" : 4, address : "55 Saturn Ring" , zipCode : NumberInt(88602117) },
       { "_id" : 5, address : "104 Venus Drive", zipCode : ["834847278", "1893289032"]}
    ]
 )


  
 db.addressBook.find( { "zipCode" : { $type : 2 } } );
 db.addressBook.find( { "zipCode" : { $type : "string" } } );
 
 db.addressBook.find( { "zipCode" : { $type : 1 } } )
 db.addressBook.find( { "zipCode" : { $type : "double" } } )
 
 db.addressBook.find( { "zipCode" : { $type : "number" } } )


  db.grades.insertMany(
    [
       { "_id" : 1, name : "Alice King" , classAverage : 87.333333333333333 },
       { "_id" : 2, name : "Bob Jenkins", classAverage : "83.52" },
       { "_id" : 3, name : "Cathy Hart", classAverage: "94.06" },
       { "_id" : 4, name : "Drew Williams" , classAverage : NumberInt("93") }
    ]
 )
 
 db.grades.find( { "classAverage" : { $type : [ 2 , 1 ] } } );
 db.grades.find( { "classAverage" : { $type : [ "string" , "double" ] } } );



 
 db.restaurants.insertMany([
 {
    "_id": 1,
    "address": {
       "building": "230",
       "coord": [ -73.996089, 40.675018 ],
       "street": "Huntington St",
       "zipcode": "11231"
    },
    "borough": "Brooklyn",
    "cuisine": "Bakery",
    "grades": [
       { "date": new Date(1393804800000), "grade": "C", "score": 15 },
       { "date": new Date(1378857600000), "grade": "C", "score": 16 },
       { "date": new Date(1358985600000), "grade": MinKey(), "score": 30 },
       { "date": new Date(1322006400000), "grade": "C", "score": 15 }
    ],
    "name": "Dirty Dan's Donuts",
    "restaurant_id": "30075445"
 },
 
 {
    "_id": 2,
    "address": {
       "building": "1166",
       "coord": [ -73.955184, 40.738589 ],
       "street": "Manhattan Ave",
       "zipcode": "11222"
    },
    "borough": "Brooklyn",
    "cuisine": "Bakery",
    "grades": [
       { "date": new Date(1393804800000), "grade": MaxKey(), "score": 2 },
       { "date": new Date(1378857600000), "grade": "B", "score": 6 },
       { "date": new Date(1358985600000), "grade": MaxKey(), "score": 3 },
       { "date": new Date(1322006400000), "grade": "B", "score": 5 }
    ],
    "name": "Dainty Daisey's Donuts",
    "restaurant_id": "30075449"
 }
 ]
 
 
 
 )
 
 db.restaurants.find(
    { "grades.grade" : { $type : "minKey" } }
 )
 
 db.restaurants.find(
    { "grades.grade" : { $type : "maxKey" } }
 )
 
 //Querying by Array Type
 
 db.SensorReading.insertMany([
     {
    "_id": 1,
    "readings": [
       25,
       23,
       [ "Warn: High Temp!", 55 ],
       [ "ERROR: SYSTEM SHUTDOWN!", 66 ]
    ]
 },
 {
    "_id": 2,
    "readings": [
       25,
       25,
       24,
       23
    ]
 },
 {
    "_id": 3,
    "readings": [
       22,
       24,
       []
    ]
 },
 {
    "_id": 4,
    "readings": []
 },
 {
    "_id": 5,
    "readings": 24
 }]
 )
 
 db.SensorReading.find( { "readings" : { $type: "array" } } )

 