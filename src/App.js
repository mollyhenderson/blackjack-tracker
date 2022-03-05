import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='row'><button className='win'>W</button> 12%</div>
      <div className='row'><button className='loss'>L</button>50%</div>
      <div className='row'><button className='push'>P</button>100%</div>
      <div className='total'>Total</div>
      <button className='reset'>Reset</button>
    </div>
  );
}

export default App;
