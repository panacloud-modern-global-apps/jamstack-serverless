// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var mongoose = require('mongoose');

exports.handler = async (event, context) => {
  let db;
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    db = mongoose.connection;
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
    const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);


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
  finally{
    db.close();
  }
}
