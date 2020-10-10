import React, {useState, useEffect} from "react"

export default function Home() {
  const [mydata, setData] = useState({name:"",age:0});

  useEffect(() => {
    (async()=> {
      console.log("useEffect Called");
      const response = await fetch(`/.netlify/functions/hello`);
      const data = await response.json();
      setData(data);
      console.log("Data: " + JSON.stringify(data));
    })();
  }, []);





  return <div>
    <div>Hello world with Gatsby from Netlify!</div>
    <div>Name: {mydata.name}</div>
    <div>Age: {mydata.age}</div>
    </div>
}
