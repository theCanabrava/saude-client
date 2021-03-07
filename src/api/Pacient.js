import health from './client/health';
import paths from './client/paths';

const Pacient =
{
    getAppointments: async () =>
    {
        const res = await health.get(paths.PACIENT.GET_APPOINTMENTS);
        return res.data.appointments;
    },

    getEstablishments: async () =>
    {
        const res = await health.get(paths.PACIENT.GET_ESTABLISHMENTS);
        return res.data.establishments;
    },

    getProcedures: async establishmentId =>
    {
        const res = await health.get(paths.PACIENT.GET_PROCEDURES, {params: {establishmentId}});
        return res.data.procedures;
    },

    getProfessionals: async (establishmentId, procedureId) =>
    {
        const res = await health.get(paths.PACIENT.GET_PROFESSIONALS, {params: {establishmentId, procedureId}});
        return res.data.professionals;
    },

    scheduleAppointment: async appointment =>
    {
        const res = await health.post(paths.PACIENT.SCHEDULE_APPOINTMENT, appointment);
        return res.data.appointment;
    }
}

export default Pacient;