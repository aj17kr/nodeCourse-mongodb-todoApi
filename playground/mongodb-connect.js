const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
return console.log("Error connecting to the MongoDB server",err);
}
console.log("Successfully connected to the MongoDB server.")

const myDB=db.db('TodoApp');
// myDB.collection('Todos').insertOne({
// text:'Something to do',
// completed:false
// },(err,result)=>{
// if(err){
// 	return console.log("Unable to insert todo",err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

myDB.collection("Users").insertOne({
	name:"rob",
	age:25,
	location:'india'
},(err,result)=>{
if(err) return console.log("error inserting into DB",error);

console.log(JSON.stringify(result.ops,undefined,2));
});

db.close();
});