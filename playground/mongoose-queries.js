const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/users');

// =============Find in Todo collection=============== //
// let id="5a95993081a56f4d446fb235";
//
// //check if enterted ID is a valid ID.
// if(!ObjectID.isValid(id)){
//   console.log("Entered Id is not valid, Retry !");
// }

//find in all
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log("Result from DB:\n", todos);
// })

//find one
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log("Result from DB:\n", todo);
// })

//find by ID
// Todo.findById(id).then((todo)=>{
//   if(!id){
//     console.log("Id not found");
//   }
//   console.log("Result from DB:\n", todo);
// }).catch((e)=>e)

// =============Find in Users collection=============== //

let IDUser="5a96b9f89fd801ad32d2b4a9";

//check if enterted ID is a valid ID.
// if(!ObjectID.isValid(IDUser)){
//   console.log("Entered Id is not valid, Retry !");
// }

//find by ID
Users.findById(IDUser).then((todo)=>{
  if(!todo){
    return console.log("User not found");
  }
  console.log("Result from DB:\n", todo);
},(e)=>{console.log(e);
});
