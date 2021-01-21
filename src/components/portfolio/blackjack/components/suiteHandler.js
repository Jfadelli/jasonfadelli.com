const heartQS = document.querySelectorAll('.heart')
const diamondQS = document.querySelectorAll('.diamond')
const clubQS = document.querySelectorAll('.club')
const spadeQS = document.querySelectorAll('.spade')


const dealerShowHeart = (props) => {
    let i;
    console.log(props.dealerHandState)
    console.log(heartQS, diamondQS, clubQS, spadeQS)

    if (props !== undefined) {
        for (i = 0; i < props.dealerHandState.length; i++) {
            console.log('forLoop')

            if (props.dealerHandState[i].suite === 'hearts') {
                console.log('ifTriggered')

                try { heartQS[i].style.display = 'flex'; console.log('heart apply') } catch { console.log('break') }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }
}
const dealerHideHeart = (props) => {
    let i;
    if (props) {
        for (i = 0; i < props.dealerHandState.length; i++) {
            if (!props.dealerHandState[i]) { break; }
            else if (props.dealerHandState[i].suite !== 'hearts') {
                try { heartQS[i].style.display = 'none' } catch { break; }
            }
        }
    }
}

export {
    dealerShowHeart,
    dealerHideHeart
}