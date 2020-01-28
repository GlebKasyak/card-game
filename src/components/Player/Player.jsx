import React, { useContext } from 'react';
import "./style.css";

import Card from "../Card/Card";
import Context from "../../Context";

//player component
export default ({ currentPlayer, nextPlayer }) => {
    const state = useContext(Context);

    return (
        <div className="player">
            <div className="player__name">
                <p>{ currentPlayer }</p>
                { state[currentPlayer].isPlayerMove &&
                    <span className="player__name-turn">You turn!</span>
                }
            </div>

            <div onClick={
                state[currentPlayer].isPlayerMove
                    ? state.setPlayerMove.bind(this, currentPlayer, nextPlayer )
                    : () => {}
                }
            >
                { state[currentPlayer].hand.map((card, index) => {
                    let left = 50 - (index + 1) + "%";
                    return <Card key={ index } position={{ left: left, top: "150px" }} />
                }
            )}
            </div>
        </div>

    );

};