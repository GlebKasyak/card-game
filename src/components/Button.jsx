import React from 'react';

export default ({ text, onClick }) => (
    <button className="btn" onClick={ onClick } >
        { text }
    </button>
);
