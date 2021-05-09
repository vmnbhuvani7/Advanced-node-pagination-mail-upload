const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};
mongoose.connect(process.env.DATABASE_URL, options)
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error' + err)
    })
