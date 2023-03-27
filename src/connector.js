const mongoURI ="mongodb+srv://alivenimangalapati:covidstats@cluster0.7hbswtp.mongodb.net/?retryWrites=true&w=majority";

let mongoose = require("mongoose");
const { tallySchema } = require("./schema");

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected with mongodb server ");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });
collection_connection = mongoose.model("covidtally", tallySchema);

exports.connection = collection_connection;