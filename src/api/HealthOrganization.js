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

    generateReport: async report =>
    {
        const res = await health.post(paths.HEALTH_ORGANIZATION.GENERATE_REPORT, report);
        return res.data.content;
    }
}

export default HealthOrganization;