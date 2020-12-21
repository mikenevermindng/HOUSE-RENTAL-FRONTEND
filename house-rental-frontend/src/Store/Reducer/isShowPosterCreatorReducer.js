import { posterCreatorPopup } from '../../Constants/storeConstants';

const isShowPosterCreatorReducer = (state = false, action) => {
    switch (action.type) {
        case posterCreatorPopup.OPEN:
            return true;
        case posterCreatorPopup.CLOSE:
            return false;
        default:
            return state;
    }
};

export default isShowPosterCreatorReducer;