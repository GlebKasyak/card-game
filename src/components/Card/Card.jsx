import React from 'react';
import "./style.css";

export default ({ card, position }) => (
    <div className="card" style={ position }>
        { card &&
            <p className="card__card-title">{ card }</p>
        }
    </div>
);
