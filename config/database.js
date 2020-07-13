const mongoose = require('mongoose')

// db configuration
const configureDB =  () => {
    mongoose.connect('mongodb://localhost:27017/food-recepies', { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex : true})
        .then(() => {
            console.log('Connected to Datatbase')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB
