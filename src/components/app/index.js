import './styles.scss';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

import PlayerZone from '../player-zone';
import DisplayDrink from '../display-drink';
import Drain from '../drain';
import WaitingRoom from '../waiting-room';

const gameStateMachine = Machine({
  id: 'game',
  initial: 'waitingRoom',
  states: {
    waitingRoom: {
      on: { START_GAME: 'displayDrink'}
    },
    displayDrink: {
      on: { BEGIN: 'select' }
    },
    select: {
      on: { DRINK: 'drink', WATER: 'water' }
    },
    drink: {
      on: { SUBMIT: 'calculate' }
    },
    water: {
      on: { SUBMIT: 'calculate' }
    },
    calculate: {
      on: { CALCULATED: 'displayScore' }
    },
    displayScore: {
      on: { DISPLAY: 'displayDrink' }
    },
  }
});

const states = {
  displayDrink: ''
}

const drinks = [
  { name: 'Chiliguaro', type: 'shot', alcohol: 25 },
  { name: 'Pilsen', type: 'beer', alcohol: 10 },
  { name: 'Imperial', type: 'beer', alcohol: 10 },
  { name: 'Tequila', type: 'shot', alcohol: 40 },
]

const selectDrink = Math.floor(Math.random() * drinks.length);

function App() {
  const [state, next] = useMachine(gameStateMachine);
  console.log(state.value);
  return (
    <div className="app">
      {state.value === 'waitingRoom' && <WaitingRoom next={next} /> }
      {
        state.value === 'displayDrink' && 
          <DisplayDrink 
            next={next} 
            image="https://source.unsplash.com/random" 
            drink={drinks[selectDrink]} />
      }
      {state.value === 'select' && <PlayerZone next={next} image="https://source.unsplash.com/random" />}
    </div>
  );
}

export default App;
