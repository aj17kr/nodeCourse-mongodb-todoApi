const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/users');

// =============Remove in Todo collection=============== //
let id="5a9d6bcf10017f637b38b512";

//check if enterted ID is a valid ID.
if(!ObjectID.isValid(id)){
  console.log("Entered Id is not valid, Retry !");
}



//find one and remove
// Todo.findOneAndRemove({
//   _id:"5a9d5cf010017f637b38af9c"
// }).then((todo)=>{
//   console.log("Result from DB:\n", todo);
// })

//find by ID
Todo.findByIdAndRemove(id).then((todo)=>{
  if(!todo){
    return console.log("Id not found");
  }
  console.log("Result from DB:\n", todo);
})
