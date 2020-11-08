import { Button } from '../common';
import './styles.scss';

function PlayerZone({ image, next }) {
  return (
    <section className="player-zone">
      <img src={image} alt="player headshot" className="player-headshot" />
      <div className="player-options">
        <Button
          clickFn={() => {
            next('DRINK');
          }}
          colour="green">
          Drink
        </Button>
        <Button
          clickFn={() => {
            next('WATER');
          }}
          colour="blue"
          text="Water">
          Water
        </Button>
      </div>
    </section>
  );
}

export default PlayerZone;
