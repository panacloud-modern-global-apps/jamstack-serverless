import React , {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        
          {data.message}
      
      </header>
    </div>
  );
}

export default App;
