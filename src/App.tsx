import { Carousel } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import About from '@/container/About/';
import Index from '@/container/Index';

import './styles/App.less';

function App() {
  return (

    <div className="App">
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
      <Link to="/about">About</Link>
      <p></p>
      <Link to="/Index">Index</Link>
      <p></p>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/index" element={<Index name='Index' />} />
      </Routes>
    </div>
  );
}

export default App;
