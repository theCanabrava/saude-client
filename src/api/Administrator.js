import health from './client/health';
import paths from './client/paths';

const Administrator =
{
    getEstablishments: async () =>
    {
        const res = await health.get(paths.ADMINISTRATOR.GET_ESTABLISHMENTS);
        return res.data.establishments;
    },

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
    },

    getAppointments: async establishmentId =>
    {
        const res = await health.get(paths.ADMINISTRATOR.GET_APPOINTMENTS, {params: {establishmentId}});
        return res.data.appointments;
    },

    confirmAppointment: async (establishmentId, appointmentId) =>
    {
        const res = await health.put(paths.ADMINISTRATOR.CONFIRM_APPOINTMENT, {establishmentId, appointmentId});
        return res.data.appointment;
    }
}

export default Administrator;