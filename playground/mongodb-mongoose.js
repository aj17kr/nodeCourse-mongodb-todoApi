const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

var url="mongodb://localhost:27017/nodeMongoDB";
mongoose.connect(url);

//Todo is collection aka table name.
// var todoCollection=mongoose.model("Todo",{
//   text:{type:String},
//   completed:{type:Boolean},
//   completedAt:{Number}
// });
//
// var newTodo=new todoCollection({text:"hello first"});
//
// newTodo.save().then((doc)=>{
//   console.log("Saved",doc);
// },(err)=>{
//   console.log("unable to save",err);
// });

//Users is a collection aka table name

var usersCollection=mongoose.model("Users",{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});

var newUser=new usersCollection({});

newUser.save().then((doc)=>{
  console.log(`Saved ${doc}`);
},(err)=>{
  if(err) console.log(`Error saving(from consoleLog- ) ${err}`);
});
