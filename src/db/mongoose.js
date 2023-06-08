const mongoose = require('mongoose')
// database setup
mongoose.connect(process.env.mongourl, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })