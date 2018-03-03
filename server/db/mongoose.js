const mongoose=require("mongoose");

mongoose.Promise=global.Promise;

//var url="mongodb://localhost:27017/nodeMongoDbTodo";
//Use dynamic URL in heroku or local MongoDB url.
let db = {
  localhost: 'mongodb://localhost:27017/nodeMongoDbTodo',
  mlab: 'mongodb://aj:000000@ds155278.mlab.com:55278/heroku-nodetodo-api'
};
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.export={mongoose};
