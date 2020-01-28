import React from 'react';
import Card from "./Card";

export default ({ cardBank }) => {
    return (
        <div className="card-bank">
            { cardBank.map((card, index) => {
                let right = 5 + (index +1) + "%";
                return <Card
                    card={ card }
                    position={{ right: right }}
                    key={ index }
                />
            }) }
        </div>
    );
};
