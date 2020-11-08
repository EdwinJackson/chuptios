import { Button } from '../common';
import './styles.scss';

const WaitingRoom = ({ next }) => (
  <main className="waiting-room">
    <h1 className="title">Chupitos</h1>
    <h2 className="subheading">The Responsible Drinking Game</h2>
    <Button
      clickFn={() => {
        next('START_GAME');
      }}>
      Start!
    </Button>
  </main>
);

export default WaitingRoom;
