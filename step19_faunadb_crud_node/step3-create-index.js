#!/usr/bin/env node

//https://docs.fauna.com/fauna/current/tutorials/crud#index

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_SERVER_SECRET) {
    //console.log("Faunadb Server Secret: " + process.env.FAUNADB_SERVER_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
    
    //Create a index of the container in the database
    try {
      var result = await client.query(
        q.CreateIndex({
            name: 'posts_by_title',
            source: q.Collection('posts'),
            terms: [{ field: ['data', 'title'] }],
          })
      );
      console.log("Index Created: " + result.name);
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }
      
  } else {
    console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Index Creation');
  }

})();