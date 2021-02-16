import health from './client/health';
import paths from './client/paths';

const Administrator =
{
    getProcedure: async name =>
    {
        const res = await health.get(paths.ADMINISTRATOR.GET_PROCEDURE, {params: {name}});
        return res.data.procedure;
    },

    getProfessional: async name =>
    {
        const res = await health.get(paths.ADMINISTRATOR.GET_PROFESSIONAL, {params: {name}});
        return res.data.professional;
    },

    createEstablishment: async establishment =>
    {
        const res = await health.post(paths.ADMINISTRATOR.CREATE_ESTABLISHMENT, establishment);
        return res.data.establishment;
    }
}

export default Administrator;