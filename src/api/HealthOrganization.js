import health from './client/health';
import paths from './client/paths';

const HealthOrganization =
{
    getEstablishments: async name =>
    {
        const res = await health.get(paths.HEALTH_ORGANIZATION.GET_ESTABLISHMENT, {params: {name}});
        return res.data.establishment;
    },

    getProcedure: async name =>
    {
        const res = await health.get(paths.HEALTH_ORGANIZATION.GET_PROCEDURE, {params: {name}});
        return res.data.procedure;
    },

    checkReport: async report =>
    {
        const res = await health.get(paths.HEALTH_ORGANIZATION.CHECK_REPORT, {params: {...report}, responseType: 'blob'})
        return res.data;
    },

    generateReport: async report =>
    {
        const res = await health.get(paths.HEALTH_ORGANIZATION.GENERATE_REPORT, {params: {...report}, responseType: 'blob'})
        return res.data;
    }
}

export default HealthOrganization;