import React, { Component } from 'react';

import Context from "./../Context";
import App from "./../App";

import { shuffle, isWinnerMove } from "./../utils/methods";
import { defaultCardDeck } from "./../utils/defaultSettings";

export class AppContainer extends Component {
    state = {
        start: false,
        player1: {
            isPlayerMove: true,
            hand: []
        },
        player2: {
            isPlayerMove: false,
            hand: []
        },
        CardDeck: [],
        cardBank: [],
        winningPlayer: ""
    };

    componentDidMount() {
        this.setState({CardDeck: shuffle(defaultCardDeck)});
    };

    componentDidUpdate(prevProps, prevState) {
        const { start, CardDeck } = this.state;

        if(prevState.start !== start) {
            if(start) {
                this.setState({
                    winningPlayer: ""
                });
                this.distributionOfCards(CardDeck);
            }
        }
    }

    distributionOfCards = CardDeck => {
        let theFirstPlayerHand = [];
        let theSecondPlayerHand = [];
        let { player1, player2 } = this.state;

        for(let i = CardDeck.length - 1; i >= 0; --i) {
            if(i % 2 !== 0) {
                theFirstPlayerHand.push(CardDeck[i])
            } else {
                theSecondPlayerHand.push(CardDeck[i])
            }
        }

        this.setState({
            player1: { ...player1, hand: player1.hand.concat(theFirstPlayerHand)},
            player2: { ...player2, hand: player2.hand.concat(theSecondPlayerHand)},
            CardDeck: []
        })
    };

    cardMove = playerHand => {
        let copyCardBank = [...this.state.cardBank];
        let currentCard = playerHand.pop();
        copyCardBank.push(currentCard);

        this.setState({ cardBank: copyCardBank });

        if(isWinnerMove(currentCard, copyCardBank[copyCardBank.length - 2])) {
            setTimeout(() => {
                this.setState({cardBank: []});
            }, 1000);
            return [...copyCardBank].concat(playerHand);
        }

        return playerHand
    };

    setPlayerMove = (currentPlayer, nextPlayer, event) => {
        event.preventDefault();

        this.setState({
            [currentPlayer]: {
                isPlayerMove: false,
                hand: this.cardMove(this.state[currentPlayer].hand)
            },
            [nextPlayer]: {
                ...this.state[nextPlayer],
                isPlayerMove: true
            },
        });

        if(!this.state[currentPlayer].hand.length) {
            this.setState({
                start: false,
                player1: {
                    isPlayerMove: true,
                    hand: []
                },
                player2: {
                    isPlayerMove: false,
                    hand: []
                },
                cardBank: [],
                CardDeck: shuffle(defaultCardDeck),
                winningPlayer: nextPlayer
            }, () => console.log(this.state))
        }
    };

    onShuffle = () => {
        this.setState({ CardDeck: this.shuffle(this.state.CardDeck) })
    };

    onStart = () => this.setState({ start: true });

    render() {
        return (
            <Context.Provider value={ this.state }>
                <App
                    onShuffle={ this.onShuffle }
                    onStart={ this.onStart }
                    setPlayerMove={ this.setPlayerMove }
                />
            </Context.Provider>
        );
    }
}
