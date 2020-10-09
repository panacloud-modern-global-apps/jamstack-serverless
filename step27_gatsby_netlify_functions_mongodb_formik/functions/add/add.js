// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var mongoose = require('mongoose');

exports.handler = async (event, context) => {
  try {

    // Only allow POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    let reqObj = JSON.parse(event.body);

    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number
    });

    const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
    
    const student1 = new Student({
      name: reqObj.name,
      age: reqObj.age
    });
    const result = await student1.save();
    
    console.log("Entry Created and Inserted: " + result._id);
   
    
    return {
      statusCode: 200,
      body: JSON.stringify({ id: `${result._id}` }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
