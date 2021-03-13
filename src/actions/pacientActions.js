import { Pacient } from '../api';
import history from '../history';
import types from './types';

export const getPacientAppointments = () => async dispatch =>
{
    const appointments = await Pacient.getAppointments();
    const action = 
    {
        type: types.GET_PACIENT_APPOINTMENTS,
        payload: [...appointments]
    }
    dispatch(action);
}

export const getEstablishments = () => async dispatch =>
{
    const establishments = await Pacient.getEstablishments();
    const action =
    {
        type: types.GET_ESTABLISHMENTS,
        payload: [...establishments]
    }
    dispatch(action);
}

export const getProcedures = (establishment) => async dispatch =>
{
    const procedures = await Pacient.getProcedures(establishment.id);
    const action =
    {
        type: types.GET_PROCEDURES,
        payload: [...procedures]
    }
    dispatch(action);
}

export const getProfessionals = (establishment, procedure) => async dispatch =>
{
    const professionals = await Pacient.getProfessionals(establishment.id, procedure.id);
    const action =
    {
        type: types.GET_PROFESSIONALS,
        payload: [...professionals]
    }
    dispatch(action);
}

export const getAvailability = (professionalId, date) => async dispatch =>
{
    const availability = await Pacient.getAvailability(professionalId, date);
    const action =
    {
        type: types.GET_AVAILABILITY,
        payload: [...availability]
    }
    dispatch(action);
}

export const scheduleAppointment = (appointment) => async dispatch =>
{
    const createdAppointment = await Pacient.scheduleAppointment(appointment);
    const action =
    {
        type: types.SCHEDULE_APPOINTMENT,
        payload: createdAppointment
    }

    history.push('/agendamento');
    dispatch(action);
}