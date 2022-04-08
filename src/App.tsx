import { useState } from "react";
import { Button, Card, Carousel } from 'antd';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Carousel >
        <div>
          <h3 className="carousel-content">1</h3>
        </div>
        <div>
          <h3 className="carousel-content">2</h3>
        </div>
        <div>
          <h3 className="carousel-content">3</h3>
        </div>
        <div>
          <h3 className="carousel-content">4</h3>
        </div>
      </Carousel>
      {/* <Card title="Antd Card" style={{ width: 300 }}>
        <Button onClick={() => setCount((count) => count + 1)} type="primary" >
          count is: {count}
        </Button>
      </Card> */}
    </div>
  );
}

export default App;
