// reference
db.products.insertOne({
  title: "camera",
  price: 20000,
  rating: 4.5,
  stocks: 100,
});

db.customers.insertOne({
  name: "ark",
  addresss: {
    street: "Bangalore",
    pincode: 560032,
  },
});

db.orders.insertOne({
  productId: ObjectId("66a1a5cbade0aa40e1c4e4a5"),
  customerId: ObjectId("66a1a5dbade0aa40e1c4e4a6"),
});

//embededd

db.orders.insertOne({
  title: "iphone 15 plus",
  price: 94000,
  rating: 5,
  stocks: 50,
  name: "ark",
  addresss: {
    street: "Bangalore",
    pincode: 560032,
  },
  oid: 1,
});

db.books.insertOne({
  name: "programming",
  author: [
    {
      id: "ark",
      name: "python",
      cost: 200,
    },
    {
      id: "ark",
      name: "java",
      cost: 500,
    },
    {
      id: "josh",
      name: "mongodb",
      cost: 1000,
    },
  ],
});

db.authors.insertMany([
  {
    name: "ark",
    age: 24,
    address: {
      street: "bangalore",
    },
  },
  {
    name: "josh",
    age: 24,
    address: {
      street: "bangalore",
    },
  },
]);

//fetch using lookup

db.books.updateOne(
  {},
  {
    $set: {
      author: [
        ObjectId('66a1a82d54d66a5d2fc4e49f'),
        ObjectId('66a1a82d54d66a5d2fc4e4a0'),
      ],
    },
  }
);

db.books.aggregate([
    {
      $lookup: {
        from: "authors",
        localField: "author",
        foreignField: "_id",
        as: "guvibooks",
      },
    },
  ]).pretty();
