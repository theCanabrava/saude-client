import { types } from '../actions';

const INITIAL_STATE =
{
    establishments: [],
    procedures: [],
    professionals: [],
    appointments: [],
    error: undefined
}

export default (state = INITIAL_STATE, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const getEstablishments = (state, payload) => ({...state, establishments: payload});
const addProcedure = (state, payload) => ({...state, procedures:[...state.procedures, payload]});
const removeProcedure = (state, payload) => ({...state, procedures:state.procedures.filter(p => p.id !== payload)});
const addProfessional = (state, payload) => ({...state, professionals:[...state.professionals, payload]});
const removeProfessional = (state, payload) => ({...state, professionals:state.professionals.filter(p => p.id !== payload)});
const resetEstablishment = (state, payload) => ({...state, procedures: [], professionals: [], error: undefined});
const submitEstablishment = (state, payload) => ({...state, establishments:[...state.establishments, payload]});
const getAppointments = (state, payload) => ({...state, appointments: payload});
const confirmAppointment = (state, payload) => 
{
    const appointments = state.appointments;
    appointments.find(a => a.id === payload).status.establishmentConfirmed = true;
    return {...state, appointments: [...appointments]};
}
const loadEstablishment = (state, payload) => ({...state, procedures: payload.procedures, professionals: payload.professionals, error: undefined})
const setError = (state, payload) => ({...state, error: payload});

const handlers =
{
    [types.GET_ADMIN_ESTABLISHMENTS]: getEstablishments,
    [types.ADD_PROCEDURE]: addProcedure,
    [types.REMOVE_PROCEDURE]: removeProcedure,
    [types.ADD_PROFESSIONAL]: addProfessional,
    [types.REMOVE_PROFESSIONAL]: removeProfessional,
    [types.RESET_ESTABLISHMENT]: resetEstablishment,
    [types.CREATE_ESTABLISHMENT]: submitEstablishment,
    [types.GET_ESTABLISHMENT_APPOINTMENTS]: getAppointments,
    [types.CONFIRM_ESTABLISHMENT]: confirmAppointment,
    [types.LOAD_ESTABLISHMENT]: loadEstablishment,
    [types.SET_ESTABLISHMENT_ERROR]: setError,
    hasHandler: key => handlers[key] !== undefined
}