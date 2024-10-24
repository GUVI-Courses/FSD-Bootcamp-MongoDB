// use instagram;
//
// referencing

db.posts.insertOne({
  title: "Mongodb",
  organization: "guvi",
  description: "This is the best course for learning",
  postedOn: new Date(),
  author: "ark",
  comments: ["cmt1", "cmt2", "cmt3"],
});

db.usersComments.insertMany([
  {
    _id: "cmt1",
    text: "Awesome",
  },

  {
    _id: "cmt2",
    text: "Excellent",
  },

  {
    _id: "cmt3",
    text: "amazing",
  },
]);


db.usersComments.findOne({_id:"cmt1"}).text

//embedding


db.posts.insertOne({
    title: "Full Stack course by guvi",
    organization: "guvi",
    description: "This is the best course for learning",
    postedOn: new Date(),
    author: "ark",
    comments:[
        {
            user:"ark",
            text:"good course"
        },
        {
            user:"naz",
            text:"Amazing course"
        },
        {
            user:"aadi",
            text:"good course excellent"
        },
    ]
  });


db.company.insertOne({
    name:"GUVI",
    users:{
        onlinelearner:"20000000",
        offlinelearner:"100000"
    }
})

db.users.insertMany([
    {
        name:"ark",
        role:"student",
        company: ObjectId('66a1a264ade0aa40e1c4e49f')
    },
    {
        name:"naz",
        role:"student",
        company: ObjectId('66a1a264ade0aa40e1c4e49f')
    },
    {
        name:"aadi",
        role:"student",
        company: ObjectId('66a1a264ade0aa40e1c4e49f')
    },
    {
        name:"krutika",
        role:"student",
        company: ObjectId('66a1a264ade0aa40e1c4e49f')
    }
])

db.company.findOne({_id:ObjectId('66a1a264ade0aa40e1c4e49f')}).name