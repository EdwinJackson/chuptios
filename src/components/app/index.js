import './styles.scss';
import PlayerZone from '../player-zone';

function App() {
  return (
    <div className="app">
      <PlayerZone image="https://source.unsplash.com/random" />
      <PlayerZone image="https://source.unsplash.com/random" />
    </div>
  );
}

export default App;
