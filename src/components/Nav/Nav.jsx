import React, { useContext } from 'react';
import "./style.css";

import Button from "../Button/Button";
import Context from "../../Context";

import { shuffle } from "../../utils/methods";

export default () => {
    const state = useContext(Context);

    return (
        <div className="nav">
            { !state.start &&
                <>
                    <div>
                        <Button
                            text="Shuffle the deck"
                            onClick={ () =>  state.setCardDeck(shuffle(state.CardDeck)) }
                        />
                    </div>
                    <div>
                        <Button
                            text="Start game"
                            onClick={ () => state.setGame({ start: true }) }
                        />
                    </div>
                </>
            }
        </div>
    );
};
