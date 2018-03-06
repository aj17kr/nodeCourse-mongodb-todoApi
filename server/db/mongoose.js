const mongoose=require("mongoose");

mongoose.Promise=global.Promise;

//Use dynamic URL in heroku or local MongoDB url.
mongoose.connect(process.env.MONGODB_URI);

module.export={mongoose};
