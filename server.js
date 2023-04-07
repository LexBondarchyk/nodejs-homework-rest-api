const mongoose = require("mongoose");
const app = require('./app');

// const {DB_HOST, PORT = 3000} = process.env;
const DB_HOST = "mongodb+srv://Lex:nsidR62xKG8JxtrK@cluster0.tblfitv.mongodb.net/db-contacts?retryWrites=true&w=majority"
const {PORT = 4000} = process.env;
mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });