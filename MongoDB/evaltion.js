// 1.evaluation Query Operators

a.$expr

syntax: { $expr: { <expression> } }

db.monthlyBudget.insertMany([
    { "_id" : 1, "category" : "food", "budget": 400, "spent": 450 },
{ "_id" : 2, "category" : "drinks", "budget": 100, "spent": 150 },
{ "_id" : 3, "category" : "clothes", "budget": 100, "spent": 50 },
{ "_id" : 4, "category" : "misc", "budget": 500, "spent": 300 },
{ "_id" : 5, "category" : "travel", "budget": 200, "spent": 650 }
])

db.monthlyBudget.find( { $expr: { $gt: [ "$spent" , "$budget" ] } } )

db.supplies.insertMany([
   { "_id" : 1, "item" : "binder", "qty" : NumberInt("100"), "price" : NumberDecimal("12") },
   { "_id" : 2, "item" : "notebook", "qty" : NumberInt("200"), "price" : NumberDecimal("8") },
   { "_id" : 3, "item" : "pencil", "qty" : NumberInt("50"), "price" : NumberDecimal("6") },
   { "_id" : 4, "item" : "eraser", "qty" : NumberInt("150"), "price" : NumberDecimal("3") },
   { "_id" : 5, "item" : "legal pad", "qty" : NumberInt("42"), "price" : NumberDecimal("10") }
])

// Aggregation expression to calculate discounted price

Assume that for an upcoming sale next month, you want to discount the prices such that:

If qty is greater than or equal to 100, the discounted price will be 0.5 of the price.

If qty is less than 100, the discounted price is 0.75 of the price.

Before applying the discounts, you would like to know which items in the supplies collection have a discounted price of less than 5.




let discountedPrice = {
   $cond: {
      if: { $gte: ["$qty", 100] },
      then: { $multiply: ["$price", NumberDecimal("0.50")] },
      else: { $multiply: ["$price", NumberDecimal("0.75")] }
   }
};

// Query the supplies collection using the aggregation expression

db.supplies.find( { $expr: { $lt:[ discountedPrice,  NumberDecimal("5") ] } });

The following example uses 
$expr
 with $cond to calculate the discounted price based on the qty and $lt to return documents whose calculated discount price is less than NumberDecimal("5"):




 
Mod  

{ field: { $mod: [ divisor, remainder ] } }

db.inventory.insertMany( [
   { "_id" : 1, "item" : "abc123", "qty" : 0 },
   { "_id" : 2, "item" : "xyz123", "qty" : 5 },
   { "_id" : 3, "item" : "ijk123", "qty" : 12 }
] )
db.inventory.find( { qty: { $mod: [ 4, 0 ] } } )
db.inventory.find( { qty: { $mod: [ 4.0, 0 ] } } )
db.inventory.find( { qty: { $mod: [ 4.5, 0 ] } } )
db.inventory.find( { qty: { $mod: [ 4.9, 0 ] } } )
db.inventory.find( { qty: { $mod: [ 5, 0 ] } } )
db.inventory.find( { qty: { $mod: [ 5.9, 0 ] } } )


regex

syntax

{ <field>: { $regex: /pattern/, $options: '<options>' } }
{ <field>: { $regex: 'pattern', $options: '<options>' } }
{ <field>: { $regex: /pattern/<options> } }


db.products.insertMany( [
   { _id: 100, sku: "abc123", description: "Single line description." },
   { _id: 101, sku: "abc789", description: "First line\nSecond line" },
   { _id: 102, sku: "xyz456", description: "Many spaces before     line" },
   { _id: 103, sku: "xyz789", description: "Multiple\nline description" },
   { _id: 104, sku: "Abc789", description: "SKU starts with A" }
] )

db.products.find( { sku: { $regex: /789$/ } } )


-- SELECT * FROM products
-- WHERE sku like "%789";


db.products.find( { sku: { $regex: /^ABC/i } } )
db.products.find( { description: { $regex: /^S/, $options: 'm' } } )
db.products.find( { description: { $regex: /^S/ } } )
db.products.find( { description: { $regex: /S/ } } )
db.products.find( { description: { $regex: /M.*line/, $options: 'si' } } )
db.products.find( { description: { $regex: /M.*line/, $options: 's' } } )
The following example uses the m option to allow the dot character (i.e. .) to match all characters including new line as well as the i option to perform a case-insensitive match:

