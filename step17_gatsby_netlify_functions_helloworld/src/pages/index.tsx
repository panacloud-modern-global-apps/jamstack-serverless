import React, {useState, useEffect} from "react"

export default () => {
  const [mydata, setData] = useState("Default Hello");

  useEffect(() => {
    console.log("useEffect Called");
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log("Data: " + JSON.stringify(data));
        
      });
  }, []);


  return <div>
    <div>Hello world with Gatsby from Netlify!</div>
    <div>{mydata.message}</div>
    </div>
}
