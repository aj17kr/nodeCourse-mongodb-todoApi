const mongoose=require("mongoose");

mongoose.Promise=global.Promise;

var url="mongodb://localhost:27017/nodeMongoDbTodo";
//Use dynamic URL in heroku or local MongoDB url.
mongoose.connect("mongodb://aj:000000@ds155278.mlab.com:55278/heroku-nodetodo-api");

module.export={mongoose};
