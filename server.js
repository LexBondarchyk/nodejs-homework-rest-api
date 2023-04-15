const mongoose = require('mongoose')
const app = require('./app');

const {DB_HOST = "mongodb+srv://Lex:nsidR62xKG8JxtrK@cluster0.tblfitv.mongodb.net/test" , PORT = 3000} = process.env;

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });