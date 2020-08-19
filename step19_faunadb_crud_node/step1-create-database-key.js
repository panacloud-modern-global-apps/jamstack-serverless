#!/usr/bin/env node

//https://docs.fauna.com/fauna/current/tutorials/crud#create-a-server-key-to-access-the-my_app-database

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_ADMIN_SECRET) {
    //console.log("Faunadb Admin Secret: " + process.env.FAUNADB_ADMIN_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
    
    //Create a server key to access the database 
    try {
      var result = await client.query(
        q.CreateKey({
          database: q.Database('mytestdatabase'),
          role: 'server',
        })
      );
      console.log("Save the database server key: " + result.secret);
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }

  } else {
    console.log('No FAUNADB_ADMIN_SECRET in .env file, skipping Key Creation');
  }

})();

