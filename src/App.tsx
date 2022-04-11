import { Carousel } from 'antd';
import './styles/App.less';

function App() {
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
    </div>
  );
}

export default App;
