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
      name: {type: String, index: true},
      age: Number
    });

    //Creating a model
    const Student = mongoose.model('Student', studentSchema);

    // Create an instance of model 'Student'
    const student1 = new Student({
      name: "Inam",
      age: 36
    });
    const student2 = new Student({
      name: "Rehan",
      age: 15
    });
    const student3 = new Student({
      name: "Taha",
      age: 25
    });

    try {
      // Save the new model instance
      const result = await Student.insertMany([student1,student2,student3])
      console.log("Result = ", result);
    }
    catch(error) {
      console.log(error);
    }
})();