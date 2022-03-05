import './App.css';
import { useEffect, useState } from 'react';

const STORED = {
  WINS: 'wins',
  LOSSES: 'losses',
  PUSHES: 'pushes'
};

const percentage = (num, total) => (((num/total) || 0) * 100).toFixed(1);

const getLocalStorage = (key) => parseInt(localStorage.getItem(key) || '0', 10);

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [pushes, setPushes] = useState(0);

  useEffect(() => {
    setWins(getLocalStorage(STORED.WINS));
    setLosses(getLocalStorage(STORED.LOSSES));
    setPushes(getLocalStorage(STORED.PUSHES));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORED.WINS, wins);
  }, [wins]);

  useEffect(() => {
    localStorage.setItem(STORED.LOSSES, losses);
  }, [losses]);

  useEffect(() => {
    localStorage.setItem(STORED.PUSHES, pushes);
  }, [pushes]);

  const win = () => {
    setWins(wins + 1);
  }

  const loss = () => {
    setLosses(losses + 1);
  }

  const push = () => {
    setPushes(pushes + 1);
  }

  const reset = () => {
    setWins(0);
    setLosses(0);
    setPushes(0);
  }

  const total = wins + losses + pushes;

  const winPercent = percentage(wins, total);
  const lossPercent = percentage(losses, total);
  const pushPercent = percentage(pushes, total);

  return (
    <div className="App">
      <div className='row'><button className='win' onClick={win}>W</button>{winPercent}%</div>
      <div className='row'><button className='loss' onClick={loss}>L</button>{lossPercent}%</div>
      <div className='row'><button className='push' onClick={push}>P</button>{pushPercent}%</div>
      <div className='total'>Total: {total}</div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
