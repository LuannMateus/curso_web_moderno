const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/knowledge_status', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => {
    const msg = 'ERROR! Cold not possible to connect with Mongo DB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
  })
