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
        age: Number,
        courses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
      });
      const courseSchema = new mongoose.Schema({
        courseName: String,
        noOfTopics: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
      const Course = mongoose.model('Course', courseSchema);

      const course1 = new Course({
        courseName: "AI",
        noOfTopics: 4
      });
      const course2 = new Course({
        courseName: "Blockchain",
        noOfTopics: 3
      });

      const course1SaveResult = await course1.save();
      const course2SaveResult = await course2.save();

      const student = new Student({
        name: "Taha",
        age: 25,
        courses: [course1SaveResult._id, course2SaveResult._id]
      });

      const studentSaveResult = await student.save();

      console.log("Course 1 save Result: ",course1SaveResult);
      console.log("Course 2 save Result: ",course2SaveResult);
      console.log("Student save Result: ",studentSaveResult);
    }
    catch(error) {
      console.log(error);
    }
})();