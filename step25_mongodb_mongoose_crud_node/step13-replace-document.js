var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
      console.log('mongoose open for business');

      //Define a schema
      const studentSchema = new mongoose.Schema({
        name: String,
        age: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
      
      const result = await Student.replaceOne({_id:"5f80674204e3911bc4502117"},{name: "Imran"});

      console.log("Result: ",result);      
    }
    catch(error) {
      console.log(error);
    }
})();