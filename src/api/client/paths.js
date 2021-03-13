const paths =
{
    ROOT: 'http://localhost:8000',

    AUTH:
    {
        LOGIN: '/authentication/login'
    },

    ADMINISTRATOR:
    {
        GET_APPOINTMENTS: '/administrator/schedules',
        GET_ESTABLISHMENTS: '/administrator/establishments',
        CONFIRM_APPOINTMENT: '/administrator/schedule/confirm',
        GET_PROCEDURE: '/administrator/establishment/procedure',
        GET_PROFESSIONAL: '/administrator/establishment/professional',
        CREATE_ESTABLISHMENT: '/administrator/establishment/create',
    },

    PACIENT:
    {
        GET_APPOINTMENTS: '/pacient/schedules',
        GET_ESTABLISHMENTS: '/pacient/schedule/establishments',
        GET_PROCEDURES: '/pacient/schedule/procedures',
        GET_PROFESSIONALS: '/pacient/schedule/professionals',
        GET_AVAILABILITY: '/pacient/schedule/availability',
        SCHEDULE_APPOINTMENT: '/pacient/schedule/create'
    },

    PROFESSIONAL:
    {
        GET_APPOINTMENTS: '/professional/schedules',
        CONFIRM_APPOINTMENT: '/professional/schedule/confirm',
        FINISH_APPOINTMNET: '/professional/schedule/finish'
    },

    HEALTH_ORGANIZATION:
    {
        GET_ESTABLISHMENT: '/health-organization/report/establishment',
        GET_PROCEDURE: '/health-organization/report/procedure',
        GENERATE_REPORT: '/health-organization/report/generate'
    }
}

export default paths;