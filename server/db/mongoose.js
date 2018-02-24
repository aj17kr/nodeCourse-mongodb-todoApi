const mongoose=require("mongoose");

mongoose.Promise=global.Promise;

var url="mongodb://localhost:27017/nodeMongoDbTodo";
mongoose.connect(url);

module.export={mongoose};
