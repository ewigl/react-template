import { useState } from "react";
import { Button } from 'antd';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button className="ant-button" onClick={() => setCount((count) => count + 1)} type="primary" >
      count is: {count}
    </Button>
  );
}

export default App;
