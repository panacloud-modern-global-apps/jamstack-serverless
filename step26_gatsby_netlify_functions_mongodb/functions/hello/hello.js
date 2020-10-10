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
  await databaseConnection();
  try {
    const Student = mongoose.models.Student

    // Save the new model instance
    const result = await Student.findById({_id: "5f804a079fa5fb0d2cce0262"});
    console.log("Result 1 = ", result);
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  }
  catch(error) {
    return { statusCode: 500, body: error.toString() }
  }
}
