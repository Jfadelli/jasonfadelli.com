const heartQS = document.querySelectorAll('.heart')
const diamondQS = document.querySelectorAll('.diamond')
const clubQS = document.querySelectorAll('.club')
const spadeQS = document.querySelectorAll('.spade')

    const dealerShowHeart = (props) => {
        let i;
        console.log(props)


        for (i = 0; i < props.length; i++) {
            if (props[i].suite === 'hearts') {
                try { heartQS[i].style.display = 'flex' } catch { break; }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

export {
    dealerShowHeart
}