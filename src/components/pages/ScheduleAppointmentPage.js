import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ScheduleAppointmentLayout from './layouts/ScheduleAppointmentLayout';
import { 
    getEstablishments, 
    getProcedures, 
    getProfessionals, 
    getAvailability,
    scheduleAppointment
} from '../../actions';

const ScheduleAppointmentPage = ({appointmentEditor, getEstablishments, getProcedures, getProfessionals, getAvailability, scheduleAppointment}) => 
{
    useEffect(() =>
    {
        getEstablishments();
    }, []);

    const page =
    (
        <ScheduleAppointmentLayout 
            establishments={appointmentEditor.establishments} 
            procedures={appointmentEditor.procedures} 
            professionals={appointmentEditor.professionals}
            availability={appointmentEditor.availability}
            updateProcedures={getProcedures}
            updateProfessionals={getProfessionals}
            updateAvailability={getAvailability}
            onSubmitAppointment={scheduleAppointment}
        />
    )

    return page;
}

const action =
{
    getEstablishments, 
    getProcedures, 
    getProfessionals, 
    scheduleAppointment ,
    getAvailability
}
const mapStateToProps = ({pacient}) => ({appointmentEditor: pacient.appointmentEditor});
export default connect(mapStateToProps, action)(ScheduleAppointmentPage);