const card = {
    rank: '',
    suite: ''
}
const deck = []


const RandomSuite = () => {
    return Math.floor(Math.random(4))
}

const RandomRank = () => { 
    return Math.floor(Math.random(12))
}

const Shuffle = () => {
    var i
    for (i = 0; i < deck.length; i++) {
        card.suite = RandomSuite();
        card.rank = RandomRank();
        if(deck[i] === card ) {
            console.log(`added  ${card} to deck`)
            break
        }
        else {
            deck.push(card)
            console.log(`added  ${card} to deck`)
        }
    }
}

export {
    Shuffle,
    deck
}