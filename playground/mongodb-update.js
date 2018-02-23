//const MongoClient=require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
return console.log("Error connecting to the MongoDB server",err);
}
console.log("Successfully connected to the MongoDB server.")

//TodoApp is database name.
const myDB=db.db('TodoApp');
//Todos is a collection aka table name in TodoApp database. find is used to filter results from Databse>collection. Find return Cursor which has lot of objects and it's converted back to array using toArray method which returns promise so used then & then we processed results using docs and err.

//USING CALLBACK FUNCTION, Find Once
//filter is used to locate the target document aka row/record, $set is used to update the value,$inc is used to increment the target record, {returnOriginal if set to false return updated record, else old record}
var filter={_id:new ObjectID("5a8f2f5b8b271edbdf8b3aa6")};
myDB.collection('Users').findOneAndUpdate(filter,{$set:{ha:"efef"},$inc:{count:1}},{returnOriginal:false},(err,result)=>{
		if (err){
		return console.log("Unable to fetch data",err);
	}
	console.log(result)
})

db.close();
});
