import { types } from '../actions';

const INITIAL_STATE =
{
    appointmentEditor:
    {
        establishments: [],
        procedures: [],
        professionals: [],
        availability: []
    },
    appointments: []
}

export default (state = INITIAL_STATE, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const getAppointments = (state, payload) => ({...state, appointments: payload});
const getEstablishments = (state, payload) => ({...state, appointmentEditor: { establishments: payload, procedures:[], professionals:[], availability: [] }})
const getProcedures = (state, payload) => ({...state, appointmentEditor: { ...state.appointmentEditor, procedures: payload }});
const getProfessionals = (state, payload) => ({...state, appointmentEditor: { ...state.appointmentEditor, professionals: payload }}); 
const getAvailability = (state, payload) => ({...state, appointmentEditor: { ...state.appointmentEditor, availability: payload}});
const scheduleAppointment = (state, payload) => ({...state, appointmentEditor:INITIAL_STATE.appointmentEditor});

const handlers =
{
    [types.GET_PACIENT_APPOINTMENTS]: getAppointments,
    [types.GET_ESTABLISHMENTS]: getEstablishments,
    [types.GET_PROCEDURES]: getProcedures,
    [types.GET_PROFESSIONALS]: getProfessionals,
    [types.GET_AVAILABILITY]: getAvailability,
    [types.SCHEDULE_APPOINTMENT]: scheduleAppointment,
    hasHandler: key => handlers[key] !== undefined
}
