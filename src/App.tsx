import React, { useState, useEffect} from "react";
import './App.css';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const visitorCount = localStorage.getItem("visitorCount");
  
    if (visitorCount) {
      count = parseInt(visitorCount);
    }
  
    count++;
  
    localStorage.setItem("visitorCount", count.toString());
    setVisitorCount(count);
  }, []);

  return (
    <div className="app">
      <div className="header">        
          <h2>Tom's blog</h2>
          <img src="https://14068d66ba387efac9ce5e4b1741bcf2.r2.cloudflarestorage.com/ai-api/07-23/1107253a-5629-4475-a101-dc9cf72e6ee4_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=16b502c87564788383d52ec498a61a24%2F20230710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230710T211706Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6e32fdd9463f385c7808c3d6b41a963b78f0da51b1516ae4ca77f504fb0cc51d"></img>
      </div>

      <div>
      </div>

      <div className="content">
          The most famous full stack in year 2030
          <div>Visitor Count: {visitorCount}</div>
      
      </div>
    </div>
  );
}

export default App;
