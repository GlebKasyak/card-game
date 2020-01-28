import { cardWeight } from "./defaultSettings";

export const shuffle = CardDeck => {
    let j, temp;
    for(let i = CardDeck.length -1; i > 0 ; --i){
        j = Math.floor(Math.random()*(i + 1));
        temp = CardDeck[j];
        CardDeck[j] = CardDeck[i];
        CardDeck[i] = temp;
    }

    return CardDeck;
};

export const isWinnerMove = (currentCard, previousCard) => {
    if(currentCard === 6 && previousCard === "A") {
        return true
    } else if(currentCard === "A" && previousCard === 6) {
        return false
    } else if(cardWeight[currentCard] > cardWeight[previousCard]) {
        return true
    }

    return false
};