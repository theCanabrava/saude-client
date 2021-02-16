import HealthOrganization from "../api/HealthOrganization";
import history from "../history";
import types from "./types"

export const addEstablishmentToReport = name => async dispatch =>
{
    const establishment = await HealthOrganization.getEstablishments(name);
    const action = 
    {
        type: types.ADD_ESTABLISHMENT_TO_REPORT,
        payload: 
        {
            id: establishment.id,
            name: establishment.name
        }
    }
    dispatch(action);
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

export const addProcedureToReport = name => async dispatch =>
{
    const procedure = await HealthOrganization.getProcedure(name);
    const action = 
    {
        type: types.ADD_PROCEDURE_TO_REPORT,
        payload: 
        {
            id: procedure.id,
            name: procedure.name
        }
    }
    dispatch(action);
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

export const generateReport = reportRequest => async dispatch =>
{
    for(const establishmentId of reportRequest.establishmentIds)
    {
        const report =
        {
            establishmentId,
            procedureIds: reportRequest.procedureIds,
            range: reportRequest.range
        }
        const content = await HealthOrganization.generateReport(report);
        const action = { type: types.GENERATE_REPORT, payload: content };
        dispatch(action);
    }

    history.push('/');
}