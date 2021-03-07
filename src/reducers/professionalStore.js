import { types } from '../actions';

const INITIAL_STATE =
{
    appointments: []
}

export default (state = INITIAL_STATE, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const getAppointments = (state, payload) => ({...state, appointments: payload});
const confirmAppointment = (state, payload) => 
{
    console.log('confirming professional');
    console.log(payload);
    const appointments = state.appointments;
    appointments.find(a => a.id === payload).status.professionalConfirmed = true;
    return {...state, appointments: [...appointments]};
}

const handlers =
{
    [types.GET_PROFESSIONAL_APPOINTMENTS]: getAppointments,
    [types.CONFIRM_PROFESSIONAL]: confirmAppointment,
    hasHandler: key => handlers[key] !== undefined
}
