import React from 'react';
import "./style.css";

export default ({ text, onClick }) => (
    <button className="btn" onClick={ onClick } >
        { text }
    </button>
);
