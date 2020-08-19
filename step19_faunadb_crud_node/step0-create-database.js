#!/usr/bin/env node

/*
  Create .env file at project root with the following:
  FAUNADB_ADMIN_SECRET=my-admin-secret
*/

//https://docs.fauna.com/fauna/current/tutorials/crud#database

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_ADMIN_SECRET) {
    //console.log("Faunadb Admin Secret: " + process.env.FAUNADB_ADMIN_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
    
    //create database
    try {
      var result = await client.query(
        q.CreateDatabase({ name: 'mytestdatabase' })
      );
      console.log(result);
    } 
    catch (error){
      if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
        console.log('Database with this name already exists');
      }
      else {
        console.log('Unknow Error: ');
        console.log(error);
      }
      
    }

  } else {
    console.log('No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup');
  }

})();


