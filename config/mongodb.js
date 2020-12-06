const mongoose = require("mongoose");

// const ProductModel = require("./models/Product");
// const data = require("./data");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () =>
  console.log("yay mongodb connected :)")
);

mongoose.connection.on("error", () =>
  console.log("nay mongodb connection error :(")
);
