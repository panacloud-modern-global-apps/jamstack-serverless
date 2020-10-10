//https://github.com/apollographql/apollo-server/issues/1989

const { ApolloServer, gql } = require("apollo-server-lambda");
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


const typeDefs = gql`
  type Student {
      name: String,
      age: Int
  }

  type Query {
    student: Student
  }
`;



const resolvers = {
  Query: {
    student: async (parent, args, context) => {
      try {

        await databaseConnection();
        const Student = mongoose.models.Student
        const result = await Student.findById({_id: "5f804a079fa5fb0d2cce0262"});
        console.log("Result 1 = ", result);
        
        return result;
      } catch (err) {
        return err.toString();
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

exports.handler = server.createHandler();

