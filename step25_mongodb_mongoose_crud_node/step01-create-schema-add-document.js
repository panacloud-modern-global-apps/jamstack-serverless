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

      // Create an instance of model 'Student'
      const student1 = new Student({
        name: "Daniyal",
        age: 24
      });


      // Save the new model instance
      const result = await student1.save();
      console.log("Result = ", result);
    }
    catch(error) {
      console.log(error);
    }
})();