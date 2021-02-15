import history from '../history';
import types from './types';

export const getEstablishments = () =>
{
    const action =
    {
        type: types.GET_ESTABLISHMENTS,
        payload:
        [
            {
                id: '1',
                name: 'Materdei'
            }
        ]
    }
    return action;
}

export const getProcedures = (establishment) =>
{
    const action =
    {
        type: types.GET_PROCEDURES,
        payload:
        [
            {
                id: '1',
                name: 'Consulta'
            }
        ]
    }
    return action;
}

export const getProfessionals = (establishment, procedure) =>
{
    const action =
    {
        type: types.GET_PROFESSIONALS,
        payload:
        [
            {
                id: '1',
                name: 'Dr. Pedro Gabriel',
                availability:
                {
                    startTime: '08:00',
                    endTime: '17:00'
                }
            }
        ]
    }
    return action;
}

export const scheduleAppointment = (appointment) =>
{
    const action =
    {
        type: types.SCHEDULE_APPOINTMENT,
        payload: appointment
    }

    history.push('/');
    return action;
}