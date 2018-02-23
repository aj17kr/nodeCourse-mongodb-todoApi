const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
return console.log("Error connecting to the MongoDB server",err);
}
console.log("Successfully connected to the MongoDB server.")

//TodoApp is database name.
const myDB=db.db('TodoApp');

//USING CALLBACK FUNCTION,FindAll,sort({}) is used to sort data,age:1 will sort ascending,-ve will desending.
myDB.collection('Users').find({}).sort({age:-1}).toArray((err,result)=>{
	if (err){
		return console.log("Unable to fetch data",err);
	}
	console.log(result);
})

//USING CALLBACK FUNCTION, Find Once
// myDB.collection('Users').findOne({},(err,result)=>{
// 		if (err){
// 		return console.log("Unable to fetch data",err);
// 	}
// 	console.log(result)
// })

db.close();
});
