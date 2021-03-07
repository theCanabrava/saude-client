import HealthOrganization from "../api/HealthOrganization";
import history from "../history";
import types from "./types";
import jsFileDownload from "js-file-download";

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
        const data = await HealthOrganization.generateReport(report);
        await jsFileDownload(data, 'relatorio.pdf');
        const action = { type: types.GENERATE_REPORT, payload: {} };
        dispatch(action);
    }

    history.push('/');
}