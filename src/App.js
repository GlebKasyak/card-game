import React, { useContext }  from 'react';
import './App.css';

import { CardBankContainer, CardDeckComponent, Nav, Player } from "./components";
import Context from "./Context";

const App = ({ onShuffle, onStart, setPlayerMove }) => {
    const state = useContext(Context);

   return (
       <div className="App">
           <Nav onShuffle={ onShuffle } onStart={ onStart } />
           <CardDeckComponent />
           { state.start &&
               <div className="players-container">
                   <Player
                       playerName="player1"
                       setPlayerMove={ setPlayerMove.bind(this, "player1", "player2") }
                   />
                   <Player
                       playerName="player2"
                       setPlayerMove={ setPlayerMove.bind(this, "player2", "player1") }
                   />
               </div>
           }
           <CardBankContainer cardBank={ state.cardBank } />
           { !!state.winningPlayer &&
                <h2 className="win-title">{ state.winningPlayer } won!!!</h2>
           }
       </div>
   );
};

export default App;
