import React, { useContext } from 'react';

import Card from "./Card";
import Context from "../Context";

export default ({ playerName, setPlayerMove }) => {
    const state = useContext(Context);

    return (
        <div className="player">
            <div className="player__name">
                <p>{ playerName }</p>
                { state[playerName].isPlayerMove && <span className="player__name-turn">You turn!</span> }
            </div>

            <div onClick={ setPlayerMove } >{ state[playerName].hand.map((card, index) => {
                    let left = 50 - (index + 1) + "%";
                    return <Card key={ index } position={{ left: left, top: "150px" }} />
                }
            )}
            </div>
        </div>

    );

};