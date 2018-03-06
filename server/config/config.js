var env=process.env.NODE_ENV || "development";
console.log(`***** ${env} ******`);


if(env==="development"){
  process.env.PORT=3000;
  process.env.MONGODB_URI="mongodb://localhost:27017/nodeMongoDbTodo";
}
else if(env==="test"){
  process.env.PORT=3000;
  process.env.MONGODB_URI="mongodb://localhost:27017/nodeMongoDbTodoTest";
}
else{

  process.env.MONGODB_URI="mongodb://aj:000000@ds155278.mlab.com:55278/heroku-nodetodo-api";
}

// if(env==="production"){
//   process.env.MONGODB_URI="mongodb://aj:000000@ds155278.mlab.com:55278/heroku-nodetodo-api";
// }
// else if(env==="test"){
//   process.env.PORT=3000;
//   process.env.MONGODB_URI="mongodb://localhost:27017/nodeMongoDbTodoTest";
// }
// else{
//   process.env.PORT=3000;
//   process.env.MONGODB_URI="mongodb://localhost:27017/nodeMongoDbTodo";
// }
console.log(`****** ${process.env.MONGODB_URI}*******`);
console.log(`****** ${process.env.PORT} ********`);
