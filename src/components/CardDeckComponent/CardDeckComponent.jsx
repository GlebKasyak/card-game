import React, { useContext } from 'react';

import Card from "../Card/Card";
import Context from "../../Context";

//component for displaying the starting deck of cards
export default () => {
    const { CardDeck } = useContext(Context);

    return (
        <div className="card-deck">
            { CardDeck.map((card, index) => {
                let left = 50 - (index * 0.01) + "%";

                return (
                    <Card
                        key={ index + 1 }
                        position={{ left: left }}
                    />
                )})
            }
        </div>
    );
};