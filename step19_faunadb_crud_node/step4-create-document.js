#!/usr/bin/env node
//https://docs.fauna.com/fauna/current/tutorials/crud#post

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_SERVER_SECRET) {
    //console.log("Faunadb Server Secret: " + process.env.FAUNADB_SERVER_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
    
    //Create a document in the container of the database 
    try {
      var result = await client.query(
        q.Create(
          q.Collection('posts'),
          { data: { title: 'Serverless applications are scalable' } },
        )
      );
      console.log("Document Created and Inserted in Container: " + result.ref.id);
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }

  } else {
    console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Document Creation');
  }

})();

/*
After running this node program check the database:
https://dashboard.fauna.com/collections/posts/@db/mytestdatabase
*/