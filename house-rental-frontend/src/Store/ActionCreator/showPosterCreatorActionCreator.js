import { posterCreatorPopup } from '../../Constants/storeConstants';

const openPosterCreator = () => {
    return {
        type: posterCreatorPopup.OPEN
    }
}

const closePosterCreator = () => {
    return {
        type: posterCreatorPopup.CLOSE
    }
}

export {
    openPosterCreator,
    closePosterCreator
}