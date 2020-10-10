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
      
      const result = await Student.findByIdAndUpdate("5f80619e8ca17a49dca9c1bf",{age:12});

      console.log(`Result: ${result}`);

      
    }
    catch(error) {
      console.log(error);
    }
})();