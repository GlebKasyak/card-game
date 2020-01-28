import React, { useState, useEffect } from 'react';

import Context from "./../Context";
import App from "./../App";

import { shuffle, isWinnerMove } from "./../utils/methods";
import { defaultCardDeck } from "./../utils/defaultSettings";

export const  AppContainer = () => {
    const [game, setGame] = useState({
        start: false,
        winningPlayer: ""
    });

    const [player, setPlayer] = useState({
        player1: {
            isPlayerMove: true,
            hand: []
        },
        player2: {
            isPlayerMove: false,
            hand: []
        },
    });

    const [CardDeck, setCardDeck] = useState([]);
    const [cardBank, setCardBank] = useState([]);

    useEffect(() => {
        setCardDeck(shuffle(defaultCardDeck));
    }, []);

    useEffect(() => {
        if(game.start) {
            setGame({ start: true, winningPlayer: "" });
            distributionOfCards(CardDeck);
        }
    }, [game.start]);

    //distribution of cards to players
    const distributionOfCards = CardDeck => {
        let theFirstPlayerHand = [];
        let theSecondPlayerHand = [];
        let { player1, player2 } = player;

        for(let i = CardDeck.length - 1; i >= 0; --i) {
            if(i % 2 !== 0) {
                theFirstPlayerHand.push(CardDeck[i])
            } else {
                theSecondPlayerHand.push(CardDeck[i])
            }
        }

        setPlayer({
            player1: { ...player1, hand: player1.hand.concat(theFirstPlayerHand)},
            player2: { ...player2, hand: player2.hand.concat(theSecondPlayerHand)}
        });
        setCardDeck([]);
    };

    //card move
    const cardMove = playerHand => {
        let copyCardBank = [...cardBank];
        let currentCard = playerHand.pop();

        copyCardBank.push(currentCard);
        setCardBank(copyCardBank);

        //check move on win
        if(isWinnerMove(currentCard, copyCardBank[copyCardBank.length - 2])) {
            setTimeout(() => {
                setCardBank([]);
            }, 500);
            return [...copyCardBank].concat(playerHand);
        }

        return playerHand
    };

    const setPlayerMove = (currentPlayer, nextPlayer, event) => {
        event.preventDefault();

        //player move
        setPlayer({
            [currentPlayer]: {
                isPlayerMove: false,
                hand: cardMove(player[currentPlayer].hand)
            },
            [nextPlayer]: {
                ...player[nextPlayer],
                isPlayerMove: true
            },
        });

        //clear state and show winner player
        if(!player[currentPlayer].hand.length) {
            setGame({
                start: false,
                winningPlayer: nextPlayer
            });
            setPlayer({
                player1: {
                    isPlayerMove: true,
                    hand: []
                },
                player2: {
                    isPlayerMove: false,
                    hand: []
                }
            });
            setCardDeck(shuffle(defaultCardDeck));
            setCardBank([]);
        }
    };

    // Make the context object
    const state = {
        ...game,
        setGame,
        ...player,
        setPlayer,
        CardDeck,
        setCardDeck,
        cardBank,
        setCardBank,
        setPlayerMove
    };

    return (
        <Context.Provider value={ state }>
            <App />
        </Context.Provider>
    );

};
