import * as ActionTypes from '../ActionTypes';
import axios from 'axios';

const baseUrl = "http://localhost:3004/";

export const HomeAction = () => (dispatch) => {
    return axios.get(baseUrl + 'users')
    .then((data) => {
        if (data.status === 200) {
            let user = data.data.filter((data) => data.role === 'candidate');
            dispatch({
                type: ActionTypes.HOME_SUCCESS,
                payload: { usersData: user }
            });
        }
    }).catch((error) => {
        return error;
    });
}