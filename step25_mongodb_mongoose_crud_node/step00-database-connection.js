var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    console.log('mongoose open for business');
  }
  catch(error){
    console.log( 'mongoose connection error: ',error);
  }
    

})();