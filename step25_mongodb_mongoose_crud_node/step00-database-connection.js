var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
  try {
    // Option 1
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    console.log('mongoose open for business');
    
    // Option 2 -- To keep reference of connection
    //const connection = mongoose.createConnection(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    //await connection;
    //console.log('mongoose open for business');

    // Option 3
    //mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    //const connection = mongoose.connection;
    //await connection;
    //console.log('mongoose open for business');
  }
  catch(error){
    console.log( 'mongoose connection error: ',error);
  }
    

})();