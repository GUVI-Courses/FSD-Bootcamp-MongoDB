db.inventory.insertMany([
  { item: "Pens", quantity: 350, tags: ["school", "office"] },
  { item: "Erasers", quantity: 15, tags: ["school", "home"] },
  { item: "sharpner", quantity: 20, tags: ["shop", "home"] },
  { item: "Maps", tags: ["office", "storage"] },
  { item: "Books", quantity: 5, tags: ["school", "storage", "home"] },
]);

db.inventory.updateMany(
  {
    tags: { $in: ["home", "school"] },
  },
  {
    $set: { exclude: false },
  }
);

db.inventory.updateMany(
  {
    quantity: { $lt: 20 },
  },
  {
    $set: {
      price: 10,
    },
  }
);

db.inventory.updateMany(
  {
    tags: { $nin: ["school"] },
  },
  {
    $set: { exclude: true },
  }
);


{
    _id: ObjectId('66a1ac66faa7c79e7cc4e49b'),
    item: 'Pens',
    quantity: 350,
    tags: [ 'school', 'office' ],
    exclude: false
  },
  {
    _id: ObjectId('66a1ac66faa7c79e7cc4e49c'),
    item: 'Erasers',
    quantity: 15,
    tags: [ 'school', 'home' ],
    exclude: false,
    price: 10
  },
  {
    _id: ObjectId('66a1ac66faa7c79e7cc4e49d'),
    item: 'sharpner',
    quantity: 20,
    tags: [ 'shop', 'home' ],
    exclude: true
  },
  {
    _id: ObjectId('66a1ac66faa7c79e7cc4e49e'),
    item: 'Maps',
    tags: [ 'office', 'storage' ],
    exclude: true
  },
  {
    _id: ObjectId('66a1ac66faa7c79e7cc4e49f'),
    item: 'Books',
    quantity: 5,
    tags: [ 'school', 'storage', 'home' ],
    exclude: false,
    price: 10
  }
]

// and

db.inventory.find({$and:[{price:{$ne:2}},{price:{$exists:true}}]})

db.inventory.find({$and:[{price:{$ne:10}},{price:{$exists:true}}]})

// and -> true and true = true if any one is false then false 
// 1 0 0 0 0 =0
// 1 1 1 1 1 0= 0
// 0 0 0 0 =0
// 1 1 1 1 =1

db.inventory.find( { $and: [ { quantity: { $gte: 15 } }, { item: { $eq: "sharpner" } } ] } )
db.inventory.find( { $and: [ { tags: { $eq: 'school' } }, { quantity: { $gte: 15 } } ] } )
db.inventory.find( { $and: [ { tags: { $eq: 'school' } }, { quantity: { $eq: 5 } } ] } )



// not 

db.inventory.find({
    price:{$not :{$gt:12}}
})

db.inventory.find( { item: { $not: /^P.*/ } } )
db.inventory.find( { item: { $not: /[a-z].*/ } } )


// 3)nor

// { $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ] }

db.inventory.find( { $nor: [ { price: 9.99 }, { quantity: 5 } ]  } )
db.inventory.find( { $nor: [ { price:9.99 }, { quantity: { $gt: 20 } }, { item:{$eq:"Maps"} } ] } )

________________________________________________________________________________________

// 4)or

// { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }

db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: {$gt:1} } ] } )
db.inventory.find ( { quantity: { $in: [20, 50] } } )