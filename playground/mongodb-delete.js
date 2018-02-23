//const MongoClient=require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
return console.log("Error connecting to the MongoDB server",err);
}
console.log("Successfully connected to the MongoDB server.")

//TodoApp is database name.
const myDB=db.db('TodoApp');

//findOneAndDelete
myDB.collection('Users').findOneAndDelete({_id:new ObjectID("5a8f2f078b271edbdf8b3a9a")}).then((result)=>{
	console.log(result);
},(err)=>{
	console.log("Unable to fetch todos",err);
});

//deleteOne
// myDB.collection('Users').deleteOne({name:"rob"}).then((result)=>{
// 	console.log(result);
// },(err)=>{
// 	console.log("Unable to fetch todos",err);
// });

//deleteMany
// myDB.collection('Users').deleteMany({name:"a"}).then((result)=>{
// 	console.log(result);
// },(err)=>{
// 	console.log("Unable to fetch todos",err);
// });


db.close();
});
