// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var random = require('random-name');

exports.handler = async (event, context) => {
  try {
    console.log(random());
    let name = random.first();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${name}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
