#!/usr/bin/env node
//https://docs.fauna.com/fauna/current/tutorials/crud#update

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_SERVER_SECRET) {
    //console.log("Faunadb Server Secret: " + process.env.FAUNADB_SERVER_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
    
    //Add fields to a document in the container of the database 
    try {
      var result = await client.query(
        q.Update(
            q.Ref(q.Collection('posts'), '272283664859005447'),
            { data: { tags: ['serverless', 'Scalable'] } },
          )
      );
      console.log("Document updated in Container in Database: " + result.ref.id + " " + result.data.title);
      console.log("Tags Appended:")
      result.data.tags.map((t)=>{
          console.log(t);
      })
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }

  } else {
    console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Document Update');
  }

})();

/*
After running this node program check the database:
https://dashboard.fauna.com/collections/posts/@db/mytestdatabase
*/