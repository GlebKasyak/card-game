import React, { useContext } from 'react';

import Button from "./Button";
import Context from "../Context";

export default ({ onShuffle, onStart }) => {
    const state = useContext(Context);

    return (
        <div className="nav">
            { !state.start &&
                <>
                    <div>
                        <Button text="Shuffle the deck" onClick={ onShuffle } />
                    </div>
                    <div>
                        <Button text="Start game" onClick={ onStart } />
                    </div>
                </>
            }
        </div>
    );
};
