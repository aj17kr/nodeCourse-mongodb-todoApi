const mongoose=require("mongoose");

mongoose.Promise=global.Promise;

var url="mongodb://localhost:27017/nodeMongoDbTodo";
//Use dynamic URL in heroku or local MongoDB url.
mongoose.connect(process.env.MONGODB_URI || url);

module.export={mongoose};
