const mongoose = require('mongoose') 

const connecToDb = () => {
  mongoose.connect(
    "mongodb+srv://root:root@cluster0.eeo6yrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => console.log('MongoDB Atlas CONECTADO!'))
  .catch((err) => console.log(err))
};

module.exports = connecToDb;