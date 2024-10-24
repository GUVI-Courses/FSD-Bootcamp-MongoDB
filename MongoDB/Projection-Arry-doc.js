db.users.insertMany([
    {
        "name":"Anees",
        "age":27
    },
    {
        "name":"Meghana",
        "age":26
    },
    {
        "name":"amrutha",
        "age":24
    },
    {
        "name":"aadithyaa",
        "age":25
    },
    {
        "name":"harshith",
        "age":22
    },
    {
        "name":"shuaib",
        "age":26
    },
    {
        "name":"atheeq",
        "age":25
    },
    {
        "name":"neha",
        "age":29
    },
])

db.users.find() //only return the limited data
db.users.find().pretty().toArray()


db.users.find().forEach((user) => {
    printjson(user)
});

// projection

db.users.find({},{name:1})
db.users.find({},{name:1,_id:0})
db.users.find({},{name:1,_id:0,age:1})


// embedded docs
db.employee.insertOne({
    employeeName:"Naz",
    employeeSalary:50000,
    employeeLocation:"Bangalore",
    companyDetails:[
        {
            companyName:"GUVI",
            Baselocation:"Chennai",
        },
        {
           no_of_employee:150,
           startedAT:2014,
           CEO:"Arun" 
        }
    ],
    hobbies:[
        "learning tech stacks","singing","cooking"
    ],
    skills:[
        {
            "frontend":"HTML,CSS,JAVAScript"
        },
        {
            "backend":"python,java"
        },{
            "database":"mysql, mongodb"
        }
    ]
})

db.employee.find({"skills.frontend":"HTML,CSS,JAVAScript"})
db.employee.find({"companyDetails.companyName":"GUVI"},{companyDetails:1,_id:0})
