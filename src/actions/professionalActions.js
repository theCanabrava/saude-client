import { Professional } from '../api';
import history from '../history';
import types from './types';

export const getProfessionalAppointments = () => async dispatch =>
{
    const appointments = await Professional.getAppointments();
    const action = 
    {
        type: types.GET_PROFESSIONAL_APPOINTMENTS,
        payload: [...appointments]
    }
    dispatch(action)
}

export const confirmProfessional = (appointmentId) => async dispatch =>
{
    await Professional.confirmAppointment(appointmentId);
    const action =
    {
        type: types.CONFIRM_PROFESSIONAL,
        payload: appointmentId
    }
    dispatch(action);
}