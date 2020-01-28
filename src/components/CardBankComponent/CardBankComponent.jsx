import React, { useContext } from 'react';
import "./style.css";

import Card from "../Card/Card";
import Context from "../../Context";

//component for displaying the card bank
export default () => {
    const state = useContext(Context);

    return (
        <div className="card-bank">
            { state.cardBank.map((card, index) => {
                let right = 5 + (index +1) + "%";

                return (
                    <Card
                        card={ card }
                        position={{ right: right }}
                        key={ index }
                    />
                )})
            }
        </div>
    )
};

