// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var mongoose = require('mongoose');
let connection = null;

databaseConnection = async ()=>{
  console.log("connection exists = ",connection !==null);
  if(!connection) {
    try {
      mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ 
        useNewUrlParser: true, useUnifiedTopology:true,
        bufferCommands: false, bufferMaxEntries: 0
      });
      connection = mongoose.connection;
      await connection;
      console.log('mongoose open for business');

      //Define a schema
      const studentSchema = new mongoose.Schema({
        name: String,
        age: Number
      });

      mongoose.models.Student || mongoose.model('Student', studentSchema);
    }
    catch(error){
      console.log("Error in connecting to database = ",error);
    }
  }
  return connection;
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    // Only allow POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
    let reqObj = JSON.parse(event.body);

    await databaseConnection();
    const Student = mongoose.models.Student
    
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
