var env=process.env.NODE_ENV || "development";
console.log(`***** ${env} ******`);


if(env==="development"){
  process.env.PORT=3000;
  process.env.MONGODB_URI="mongodb://localhost:27017/nodeMongoDbTodo";
}
else if(env="test"){
  process.env.PORT=3000;
  process.env.MONGODB_URI="mongodb://localhost:27017/nodeMongoDbTodoTest";
}
console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);
// else{
//   process.env.PORT=process.env.PORT;
//   process.env.MONGODB_URI="mongodb://localhost:27017/nodeMongoDbTodoTest";
// }