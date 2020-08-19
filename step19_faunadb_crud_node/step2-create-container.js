#!/usr/bin/env node

/*
  In .env file at project root add the database server key created in step 1 i.e. previous step:
  FAUNADB_SERVER_SECRET=my-database-server-key
*/

//https://docs.fauna.com/fauna/current/tutorials/crud#collection

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_SERVER_SECRET) {
    //console.log("Faunadb Server Secret: " + process.env.FAUNADB_SERVER_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
    
    //Create a container in the database 
    try {
      var result = await client.query(
        q.CreateCollection({ name: 'posts' })
      );
      console.log("Container Created: " + result.name);
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }
      
  } else {
    console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Container Creation');
  }

})();