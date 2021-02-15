import history from "../history";
import types from "./types"

export const addEstablishmentToReport = name =>
{
    const action = 
    {
        type: types.ADD_ESTABLISHMENT_TO_REPORT,
        payload: 
        {
            id: name,
            name: name
        }
    }

    return action;
}

export const removeEstablishmentFromReport = id =>
{
    const action =
    {
        type: types.REMOVE_ESTABLISHMENT_FROM_REPORT,
        payload: id
    }

    return action;
}

export const addProcedureToReport = name =>
{
    const action = 
    {
        type: types.ADD_PROCEDURE_TO_REPORT,
        payload: 
        {
            id: name,
            name: name
        }
    }

    return action;
}

export const removeProcedureFromReport = id =>
{
    const action =
    {
        type: types.REMOVE_PROCEDURE_FROM_REPORT,
        payload: id
    }

    return action;
}

export const generateReport = reportRequest =>
{
    const action =
    {
        type: types.GENERATE_REPORT,
        payload: reportRequest
    }

    history.push('/');
    return action;
}