db.createCollection('signup',{
    validator:{
        $jsonSchema:{
            bsonType:'object',
            required:['username','name','email','password','active','phone','addedBy'],
            properties:{
                username:{
                    bsonType:'string',
                    description:'Username must be a string'
                },
                email:{
                    bsonType:'string',
                    description:'Email must be a string'
                },
                password:{
                    bsonType:'string',
                    description:'password must be a string'
                },
                active:{
                    bsonType:'bool',
                    description:'it should be boolean'
                },
                phone:{
                    bsonType:'double',
                    description:'it should be 10 digit number'
                },
                'addedBy':{
                    bsonType:'objectId',
                    description:"must be an object ID"
                },

                name:{
                    bsonType:'array',
                    required:['firstname','lastname'],
                    properties:{
                        firstname:{
                            bsonType:"string",
                            description:"First name should be string"
                        },
                        lastname:{
                            bsonType:"string",
                            description:"Last name should be string"
                        }
                    }
                }
            }
        }
    }
})

db.signup.find()

db.signup.insertOne({
    username:'arkpro',
    name:[
        {
            firstname:"ark",
            lastname:"pro"
        }
    ],
    email:"arkpro@gmail.com",
    password:"ark123",
    active:true,
    phone:9999999999,
    addedBy:ObjectId("66a1a5cbade0aa40e1c4e4a5")
})

//error

db.signup.insertOne({
    username:1,
    name:[
        {
            firstname:1,
            lastname:1
        }
    ],
    email:true,
    password:123,
    active:"true",
    phone:"9999999999",
    addedBy:false
})

//change db structure


db.runCommand({
    collMod:"signup",

       validator:{
        $jsonSchema:{
            bsonType:'object',
            required:['username','name','email','password','active','phone','addedBy'],
            properties:{
                username:{
                    bsonType:'string',
                    description:'Username must be a string'
                },
                email:{
                    bsonType:'string',
                    description:'Email must be a string'
                },
                password:{
                    bsonType:'double',
                    description:'password must be a 10 digit number'
                },
                active:{
                    bsonType:'bool',
                    description:'it should be boolean'
                },
                phone:{
                    bsonType:'double',
                    description:'it should be 10 digit number'
                },
                'addedBy':{
                    bsonType:'string',
                    description:"must be an string"
                },

                name:{
                    bsonType:'array',
                    required:['firstname','lastname'],
                    properties:{
                        firstname:{
                            bsonType:"string",
                            description:"First name should be string"
                        },
                        lastname:{
                            bsonType:"string",
                            description:"Last name should be string"
                        }
                    }
                }
            }
        }
    },

    validationAction:'error'
})


db.signup.insertOne({
    username:'arkpro',
    name:[
        {
            firstname:"ark",
            lastname:"pro"
        }
    ],
    email:"arkpro@gmail.com",
    password:9999999999,
    active:true,
    phone:9999999999,
    addedBy:'guvi'
})


db.runCommand({
    collMod:"signup",

       validator:{
        $jsonSchema:{
            bsonType:'object',
            required:['username','name','email','password','active','phone','addedBy'],
            properties:{
                username:{
                    bsonType:'string',
                    description:'Username must be a string'
                },
                email:{
                    bsonType:'string',
                    description:'Email must be a string'
                },
                password:{
                    bsonType:'string',
                    description:'password must be a string'
                },
                active:{
                    bsonType:'bool',
                    description:'it should be boolean'
                },
                phone:{
                    bsonType:'double',
                    description:'it should be 10 digit number'
                },
                'addedBy':{
                    bsonType:'string',
                    description:"must be an string"
                },

                name:{
                    bsonType:'array',
                    required:['firstname','lastname'],
                    properties:{
                        firstname:{
                            bsonType:"string",
                            description:"First name should be string"
                        },
                        lastname:{
                            bsonType:"string",
                            description:"Last name should be string"
                        }
                    }
                }
            }
        }
    },

    validationAction:'warn'
})



db.signup.insertOne({
    username:'arkpro1',
    name:[
        {
            firstname:"ark1",
            lastname:"pro1"
        }
    ],
    email:"arkpro1@gmail.com",
    password:"ark1123",
    active:true,
    phone:9999999999,
    addedBy:ObjectId("66a1a5cbade0aa40e1c4e4a5")
})

db.signup.insertOne({
    username:11,
    name:[
        {
            firstname:"ark1",
            lastname:"pro1"
        }
    ],
    email:"arkpro1@gmail.com",
    password:123,
    active:true,
    phone:9999999999,
    addedBy:1
})