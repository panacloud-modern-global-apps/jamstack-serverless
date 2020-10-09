var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    const db = mongoose.connection;
    db.on('error', function (error){
        console.log( 'mongoose connection error: ',error);
    });
    db.once('open', function () {
      console.log('mongoose open for business');
    });

})();