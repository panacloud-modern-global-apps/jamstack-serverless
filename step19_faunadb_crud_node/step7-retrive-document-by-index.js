#!/usr/bin/env node
//https://docs.fauna.com/fauna/current/tutorials/crud#retrieve

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_SERVER_SECRET) {
    //console.log("Faunadb Server Secret: " + process.env.FAUNADB_SERVER_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
    
    //Retrive a document using index in the container of the database 
    try {
      var result = await client.query(
        q.Get(
            q.Match(q.Index('posts_by_title'), 'Serverless applications are scalable')
          )
      );
      console.log("Document retrived from Container in Database: " + result.ref.id + " " + result.data.title);
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }

  } else {
    console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Document Retrival');
  }

})();