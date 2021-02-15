import history from '../history';
import types from './types';

export const login = (email, password) =>
{
    const action =
    {
        type: types.LOGIN,
        payload:
        {
            userId: '1',
            permission: 'HEALTH_ORGANIZATION'
        }
    }

    history.push('/');
    return action;
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