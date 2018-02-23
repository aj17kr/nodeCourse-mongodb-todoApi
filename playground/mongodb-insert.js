const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
return console.log("Error connecting to the MongoDB server",err);
}
console.log("Successfully connected to the MongoDB server.")

//TodoApp is database name.
const myDB=db.db('TodoApp');

var aman1={name:"aman1",age:15,location:"rohtak"};
var aman2={name:"aman2",age:17,location:"najafgarh"};
var multipleAman=[{name:"aman3",age:45,location:"sirsa"},{name:"aman4",age:30,location:"hisar"}]

//Users is a collection aka table name in TodoApp database. find is used to filter results from Databse>collection. Find return Cursor which has lot of objects and it's converted back to array using toArray method which returns promise so used then & then we processed results using docs and err.
//insert one
myDB.collection('Users').insertOne(aman1).toArray().then((docs)=>{
	console.log("Saved Todos are:");
	console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log("Unable to fetch todos",err);
});

//insert many
// myDB.collection('Users').insert(multipleAman).toArray().then((docs)=>{
// 	console.log("Saved Todos are:");
// 	console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// 	console.log("Unable to fetch todos",err);
// });


db.close();
});
