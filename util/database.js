const uri = process.env.MONGODB_URI;

const mongoose = require("mongoose");
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB Connected...")
}).catch(err => console.log(err))

mongoose.Promise = global.Promise;

module.exports = mongoose;