import health from './client/health';
import paths from './client/paths';

const Professional =
{
    getAppointments: async () =>
    {
        const res = await health.get(paths.PROFESSIONAL.GET_APPOINTMENTS);
        return res.data.appointments;
    },

    confirmAppointment: async (appointmentId) =>
    {
        const res = await health.put(paths.PROFESSIONAL.CONFIRM_APPOINTMENT, {appointmentId});
        return res.data;
    },

    finishAppointment: async (appointmentId) =>
    {
        const res = await health.put(paths.PROFESSIONAL.FINISH_APPOINTMNET, {appointmentId});
        return res.data;
    }
}

export default Professional;