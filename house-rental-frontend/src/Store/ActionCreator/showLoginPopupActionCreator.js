import { popupConstants } from '../../Constants/storeConstants';

const openLoginPopup = () => {
    return {
        type: popupConstants.OPEN
    }
}

const closeLoginPopup = () => {
    return {
        type: popupConstants.CLOSE
    }
}

export {
    openLoginPopup,
    closeLoginPopup
}