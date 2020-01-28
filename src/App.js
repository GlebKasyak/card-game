import React, { useContext }  from 'react';
import './App.css';

import { CardBankComponent, CardDeckComponent, Nav, Player } from "./components";
import Context from "./Context";

const App = () => {
    const state = useContext(Context);

    return (
       <div className="App">
           <Nav />
           <CardDeckComponent />
           { state.start &&
               <div className="players-container">
                   <Player
                       currentPlayer="player1"
                       nextPlayer="player2"
                   />
                   <Player
                       currentPlayer="player2"
                       nextPlayer="player1"
                   />
               </div>
           }
           <CardBankComponent />
           { !!state.winningPlayer &&
                <h2 className="win-title">{ state.winningPlayer } won!!!</h2>
           }
       </div>
    );
};

export default App;
