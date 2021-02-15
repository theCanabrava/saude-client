import { types } from '../actions';

const INITIAL_STATE =
{
    appointmentEditor:
    {
        establishments: [],
        procedures: [],
        professionals: []
    },
    appointments: []
}

export default (state = INITIAL_STATE, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const getEstablishments = (state, payload) => ({...state, appointmentEditor: { establishments: payload, procedures:[], professionals:[] }})
const getProcedures = (state, payload) => ({...state, appointmentEditor: { ...state.appointmentEditor, procedures: payload }});
const getProfessionals = (state, payload) => ({...state, appointmentEditor: { ...state.appointmentEditor, professionals: payload }});
const scheduleAppointment = (state, payload) => ({...state, appointments: [...state.appointments, payload], appointmentEditor:INITIAL_STATE.appointmentEditor});

const handlers =
{
    [types.GET_ESTABLISHMENTS]: getEstablishments,
    [types.GET_PROCEDURES]: getProcedures,
    [types.GET_PROFESSIONALS]: getProfessionals,
    [types.SCHEDULE_APPOINTMENT]: scheduleAppointment,
    hasHandler: key => handlers[key] !== undefined
}

