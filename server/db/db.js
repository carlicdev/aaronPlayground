const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbname = process.env.DB_NAME;

const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.lhibw.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false} )
    .then(() => console.log('Conected to db'))
    .catch(err => console.log(err));

module.exports = mongoose;