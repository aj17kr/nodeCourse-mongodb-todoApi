const mongoose=require('mongoose');

//Users is a collection aka table name
var Users=mongoose.model("Users",{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});

module.exports={Users};
