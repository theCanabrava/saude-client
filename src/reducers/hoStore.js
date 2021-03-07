import { types } from '../actions';

const INITIAL_STATE =
{
    reports: [],
    establishments: [],
    procedures: []
}

export default (state = INITIAL_STATE, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const addEstablishment = (state, payload) => ({...state, establishments:[...state.establishments, payload]});
const removeEstablishment = (state, payload) => ({...state, establishments:[state.establishments.filter(e => e.id !== payload)]});
const addProcedure = (state, payload) => ({...state, procedures:[...state.procedures, payload]});
const removeProcedure = (state, payload) => ({...state, procedures:[state.procedures.filter(p => p.id !== payload)]});
const generateReport = (state, payload) => ({reports:[...state.reports, payload], establishments: [], procedures: []});

const handlers =
{
    [types.ADD_ESTABLISHMENT_TO_REPORT]: addEstablishment,
    [types.REMOVE_ESTABLISHMENT_FROM_REPORT]: removeEstablishment,
    [types.ADD_PROCEDURE_TO_REPORT]: addProcedure,
    [types.REMOVE_PROCEDURE_FROM_REPORT]: removeProcedure,
    [types.GENERATE_REPORT]: generateReport,
    hasHandler: key => handlers[key] !== undefined
}