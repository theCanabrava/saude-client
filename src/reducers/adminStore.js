import { types } from '../actions';

const INITIAL_STATE =
{
    establishments: {},
    procedures: [],
    professionals: []
}

export default (state = INITIAL_STATE, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const addProcedure = (state, payload) => ({...state, procedures:[...state.procedures, payload]});
const removeProcedure = (state, payload) => ({...state, procedures:state.procedures.filter(p => p.id !== payload)});
const addProfessional = (state, payload) => ({...state, professionals:[...state.professionals, payload]});
const removeProfessional = (state, payload) => ({...state, professionals:state.professionals.filter(p => p.id !== payload)});
const resetEstablishment = (state, payload) => ({...state, procedures: [], professionals: []});
const submitEstablishment = (state, payload) => ({...state, establishments:{...state.establishments, [payload.id]: payload}});

const handlers =
{
    [types.ADD_PROCEDURE]: addProcedure,
    [types.REMOVE_PROCEDURE]: removeProcedure,
    [types.ADD_PROFESSIONAL]: addProfessional,
    [types.REMOVE_PROFESSIONAL]: removeProfessional,
    [types.RESET_ESTABLISHMENT]: resetEstablishment,
    [types.CREATE_ESTABLISHMENT]: submitEstablishment,
    hasHandler: key => handlers[key] !== undefined
}