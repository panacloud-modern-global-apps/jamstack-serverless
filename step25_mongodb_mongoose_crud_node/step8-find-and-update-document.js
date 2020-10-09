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

    //Define a schema
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number
    });

    //Creating a model
    const Student = mongoose.model('Student', studentSchema);

    try {
      
      const result = await Student.findOne({name: "Zeeshan"});
      console.log(`Id: ${result._id} Name: ${result.name} , Age: ${result.age}`);

      result.name = "Zeeshan Hanif";

      const updateResult = await result.save();
      console.log("Update Result = ",updateResult);
      
    }
    catch(error) {
      console.log(error);
    }
})();