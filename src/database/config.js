require("dotenv").config();
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.MONGOOSE_LOGIN}:${process.env.MONGOOSE_PASSWORD}@${process.env.MONGOOSE_ROUTE}/${process.env.MONGOOSE_DATABASE}?${process.env.MONGOOSE_PERMISSION}`;

mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
