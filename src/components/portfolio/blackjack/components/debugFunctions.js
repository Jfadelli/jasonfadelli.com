

const viewHands = (props) => {
    const viewPlayerHand = () => {
        let handSize = props.playerHandState.length
        let i;
        for (i = 0; i < handSize; i++) {
            console.log(playerHandState[i])
        }
    }
    
    const viewDealerHand = () => {
        let handSize = dealerHandState.length
        let i;
        for (i = 0; i < handSize; i++) {
            console.log(dealerHandState[i])
        }
    }
    console.log('__ DEALER HAND __')
    viewDealerHand(props.dealerHandState);
    console.log('__ PLAYER HAND __')
    viewPlayerHand(props.playerHandState);
}

export{
    viewHands
}