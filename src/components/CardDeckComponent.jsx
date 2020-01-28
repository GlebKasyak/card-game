import React, { useContext } from 'react';

import Card from "./Card";
import Context from "../Context";

export default () => {
    const { CardDeck } = useContext(Context);

    return (
        <div className="cardDeck">
            { CardDeck.map((card, index) => {
                        let left = 50 - (index * 0.01) + "%";
                        return <Card
                            key={ index + 1 }
                            position={{ left: left }}
                        />
                    }
                )
            }
        </div>
    );
};