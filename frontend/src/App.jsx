/* eslint-disable no-unused-vars */

import React,{useState,useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000")
      .then((response) => setData(response.data))
  }, []); // Add empty dependency array to prevent infinite requests

  return (
    <div>
      {data && (
        <div>
          <h2>{data.message}</h2>
          <p>Timestamp: {data.timestamp}</p>
          <p>Status: {data.status}</p>
          <h3>Items:</h3>
          <ul>
            {data.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App