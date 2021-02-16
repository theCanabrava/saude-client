import { Administrator } from '../api';
import history from '../history';
import types from './types';

export const addProcedure = (name) => async dispatch =>
{
    const procedure = await Administrator.getProcedure(name);
    const action =
    {
        type: types.ADD_PROCEDURE,
        payload:
        {
            id: procedure.id,
            name: procedure.name
        }
    }
    dispatch(action);
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

export const addProfessional = (name) => async dispatch =>
{
    const professional = await Administrator.getProfessional(name);
    const action =
    {
        type: types.ADD_PROFESSIONAL,
        payload:
        {
            id: professional.id,
            name: professional.name
        }
    }
    dispatch(action);
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

export const createEstablishment = (establishment) => async dispatch =>
{
    const establishmentData = await Administrator.createEstablishment(establishment);
    const action =
    {
        type: types.CREATE_ESTABLISHMENT,
        payload: { ...establishmentData }
    }

    history.push('/');
    dispatch(action);
} 