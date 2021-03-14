import { Administrator } from '../api';
import history from '../history';
import types from './types';

export const getAdminEstablishments = () => async dispatch =>
{
    const establishments = await Administrator.getEstablishments();
    const action = 
    {
        type: types.GET_ADMIN_ESTABLISHMENTS,
        payload: [...establishments]
    }
    dispatch(action);
}

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

export const getEstablishment = (establishmentId) => async dispatch =>
{
    const establishment = await Administrator.getEstablishment(establishmentId);
    const action = 
    {
        type: types.LOAD_ESTABLISHMENT,
        payload: 
        {
            establishment,
            professionals: establishment.professionals,
            procedures: establishment.procedures
        }
    }
    dispatch(action)
}

export const createEstablishment = (establishment) => async dispatch =>
{
    try
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
    catch
    {
        const action =
        {
            type: types.SET_ESTABLISHMENT_ERROR,
            payload: 'O endereço informado já está sendo utilizado.'
        }
        dispatch(action)
    }
} 

export const editEstablishment = (establishment) => async dispatch =>
{
    try
    {
        await Administrator.editEstablishment(establishment);
        history.push('/');
    }
    catch
    {
        const action =
        {
            type: types.SET_ESTABLISHMENT_ERROR,
            payload: 'O endereço informado já está sendo utilizado.'
        }
        dispatch(action)
    }
} 


export const getEstablishmentAppointments = (establishmentId) => async dispatch =>
{
    const appointments = await Administrator.getAppointments(establishmentId);
    const action =
    {
        type: types.GET_ESTABLISHMENT_APPOINTMENTS,
        payload: [...appointments]
    }
    dispatch(action);
}

export const confirmEstablishment = (establishmentId, appointmentId) => async dispatch =>
{
    await Administrator.confirmAppointment(establishmentId, appointmentId);

    const action =
    {
        type: types.CONFIRM_ESTABLISHMENT,
        payload: appointmentId
    }
    dispatch(action);
}