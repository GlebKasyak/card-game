import React from 'react';

export default ({ card, position }) => (
    <div className="card-deck__card" style={position}>
        { card && <p className="card-deck__card__card-title">{ card }</p> }
    </div>
);
