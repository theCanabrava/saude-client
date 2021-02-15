import { act } from 'react-dom/test-utils';
import history from '../history';
import types from './types';

export const addProcedure = (name) =>
{
    const action =
    {
        type: types.ADD_PROCEDURE,
        payload:
        {
            id: name,
            name: name
        }
    }
    return action;
}

export const removeProcedure = (id) =>
{
    const action =
    {
        type: types.REMOVE_PROCEDURE,
        payload: id
    }
    return action;
}

export const addProfessional = (name) =>
{
    const action =
    {
        type: types.ADD_PROFESSIONAL,
        payload:
        {
            id: name,
            name: name
        }
    }
    return action;
}

export const removeProfessional = (id) =>
{
    const action =
    {
        type: types.REMOVE_PROFESSIONAL,
        payload: id
    }
    return action;
}

export const resetEstablishment = () =>
{
    const action = 
    {
        type: types.RESET_ESTABLISHMENT,
        payload: {}
    }
    return action;
}

export const createEstablishment = (establishment) =>
{
    const action =
    {
        type: types.CREATE_ESTABLISHMENT,
        payload:
        {
            ...establishment,
            id: establishment.name
        }
    }

    history.push('/');
    return action;
} 