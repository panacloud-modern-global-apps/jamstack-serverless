// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const faunadb = require('faunadb'),
  q = faunadb.query;

exports.handler = async (event, context) => {
  try {
    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
    var result = await client.query(
      q.Get(q.Ref(q.Collection('posts'), '272284912966435334'))
    );
    //console.log("Document retrived from Container in Database: " + result.data.title);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
