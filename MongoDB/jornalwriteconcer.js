db.employees.insertOne({
    name:"ark",
    age:27,
    hobbies:["eat","sleep","code","repeat"]
})
db.employees.insertOne({
    name:"joshi",
    age:28,
    hobbies:["eat","sleep","code","repeat"]
})
db.employees.insertOne({
    name:"aadi",
    age:25,
    hobbies:["eat","sleep","code","repeat"]
})
db.employees.insertOne({
    name:"amrutha",
    age:26,
    hobbies:["eat","sleep","code","repeat"]
})


db.employees.insert([
    {
    name:"somil",
    age:25
   },
   {
    name:"akhil",
    age:22
   }
])


//working with ordered

db.vehicles.insertMany([
{
    _id:"bikes",
    name:"FZ yamaha"
},
{
    _id:"cars",
    name:"i20 car"
},
{
    _id:"bus",
    name:"50 seater bus"
}
])

 db.vehicles.find().pretty()


db.vehicles.insertMany([
{
    _id:"auto",
    name:"3 wheeler"
},
{
    _id:"cars",
    name:"i20 car"
},
{
    _id:"train",
    name:"1500 seater train"
}
])



db.vehicles.insertMany([
{
    _id:"auto",
    name:"3 wheeler"
},
{
    _id:"cars",
    name:"i20 car"
},
{
    _id:"train",
    name:"1500 seater train"
}
],{ordered:false})


-- write concern


db.courses.insertOne({
    course:"python",
    platform:"GUVI"
},

{
    writeConcern:{w:1}
}
)

db.courses.insertOne({
    course:"java",
    platform:"GUVI"
},

{
    writeConcern:{w:0}
}
)

db.courses.insertOne({
    course:"sql",
    platform:"GUVI"
},

{
    writeConcern:{w:1,j:false}
}
)

db.courses.insertOne({
    course:"full stack",
    platform:"GUVI"
},

{
    writeConcern:{w:0,j:true}
}
)


db.courses.insertOne({
    course:"HTML",
    platform:"GUVI"
},

{
    writeConcern:{w:1,j:false,wtimeout:300}
}
)
db.courses.insertOne({
    course:"Css",
    platform:"GUVI"
},

{
    writeConcern:{w:1,j:false,wtimeout:2}
}
)





