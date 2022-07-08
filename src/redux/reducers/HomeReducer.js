import * as ActionTypes from '../ActionTypes';

const initialState = {
    usersData: null
};

const HomeReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.HOME_SUCCESS:
            return {
                ...state,
                usersData: payload.usersData,
            };
        case ActionTypes.HOME_ERROR:
            return {
                ...state,
                usersData: null,
            };
        default:
            return state;
    }
};
export default HomeReducer;