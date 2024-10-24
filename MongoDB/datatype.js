
db.employee.insertOne({
    name:"test",
    salary:50000,
    package:8888888888888888,
    details:[{
        adharcard:78965412301452,
        pancard:"CYFPA77777"
    }],
    skills:["python","java"],
    joiningdate:new Date(),
    time:new Timestamp(),
    joined : true
    
})

db.employees.findOne().pretty()
db.stats()
db.employees.drop()
db.dropDatabase({})
show databases;
show collections;