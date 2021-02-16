import history from '../history';
import types from './types';
import { Auth } from '../api';

export const login = (email, password) => async dispatch =>
{
    const res = await Auth.login(email, password);
    const action = 
    {
        type: types.LOGIN,
        payload:
        {
            userId: res.userId,
            permission: res.permission
        }
    }

    history.push('/');
    dispatch(action);
}

export const logout = () =>
{
    const action =
    {
        type: types.LOGOUT,
        payload: {}
    }

    history.push('/login');
    return action;
}