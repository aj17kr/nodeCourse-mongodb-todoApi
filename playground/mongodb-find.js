const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
return console.log("Error connecting to the MongoDB server",err);
}
console.log("Successfully connected to the MongoDB server.")

//TodoApp is database name.
const myDB=db.db('TodoApp');
//Todos is a collection aka table name in TodoApp database. find is used to filter results from Databse>collection. Find return Cursor which has lot of objects and it's converted back to array using toArray method which returns promise so used then & then we processed results using docs and err.

// myDB.collection('Todos').find({completed:false}).toArray().then((docs)=>{
// 	console.log("Saved Todos are:");
// 	console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// 	console.log("Unable to fetch todos",err);
// });

//counting only with rob name document aka rows
//USING PROMISES, count will return number of affected document aka row/record.
// myDB.collection('Users').find({name:"man"}).count().then((count)=>{
// 	console.log("Todos count with man name is :",count);
// },(err)=>{
// 	console.log("Unable to fetch todos",err);
// });

//USING CALLBACK
// myDB.collection('Users').find({name:"man"}).count((err,count)=>{
// 	if(err){return console.log("Unable to fetch todos",err);}
// 	console.log("Todos count with man name is :",count);
// });


// >USING PROMISES,Find All using find
// myDB.collection('Users').find({}).toArray().then((docs)=>{
// 	console.log(docs)	;
// },(err)=>{
// 	console.log("Unable to fetch todos",err);
// });

//USING PROMISES,Find only one using findOne
// myDB.collection('Users').findOne({}).then((docs)=>{
// 	console.log(docs);
// },(err)=>{
// 	console.log("Unable to fetch todos",err);
// });

//USING CALLBACK FUNCTION, Find Once
// myDB.collection('Users').findOne({},(err,result)=>{
// 		if (err){
// 		return console.log("Unable to fetch data",err);
// 	}
// 	console.log(result)
// })

//USING CALLBACK FUNCTION,FindAll,using regular expression ,find with starting s string.
myDB.collection('Todos').find({text:/^S/}).toArray((err,result)=>{
	if (err){
		return console.log("Unable to fetch data",err);
	}
	console.log(result);
})

db.close();
});
