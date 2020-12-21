import { popupConstants } from '../../Constants/storeConstants';

const isShowLoginPopupReducer = (state = false, action) => {
    switch (action.type) {
        case popupConstants.OPEN:
            return true;
        case popupConstants.CLOSE:
            return false;
        default:
            return state;
    }
};

export default isShowLoginPopupReducer;