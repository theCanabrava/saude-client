const paths =
{
    ROOT: 'http://localhost:8000',

    AUTH:
    {
        LOGIN: '/authentication/login'
    },

    ADMINISTRATOR:
    {
        GET_PROCEDURE: '/administrator/establishment/procedure',
        GET_PROFESSIONAL: '/administrator/establishment/professional',
        CREATE_ESTABLISHMENT: '/administrator/establishment/create',
    },

    PACIENT:
    {
        GET_ESTABLISHMENTS: '/pacient/schedule/establishments',
        GET_PROCEDURES: '/pacient/schedule/procedures',
        GET_PROFESSIONALS: '/pacient/schedule/professionals',
        SCHEDULE_APPOINTMENT: '/pacient/schedule/create'
    },

    HEALTH_ORGANIZATION:
    {
        GET_ESTABLISHMENT: '/health-organization/report/establishment',
        GET_PROCEDURE: '/health-organization/report/procedure',
        GENERATE_REPORT: '/health-organization/report/generate'
    }
}

export default paths;