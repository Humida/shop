const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log('connected') })
        .catch(() => { throw new Error('not connect') })
}

module.exports = { connect };