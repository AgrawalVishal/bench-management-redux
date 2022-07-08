import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';

const RootReducer = combineReducers({
    authReducer: AuthReducer,
    homeReducer: HomeReducer
});

export default RootReducer;