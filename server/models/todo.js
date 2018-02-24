const mongoose=require('mongoose');

//Todo is collection aka table name.
var Todo=mongoose.model("Todo",{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports={Todo};
