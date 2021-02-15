import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ScheduleAppointmentLayout from './layouts/ScheduleAppointmentLayout';
import { 
    getEstablishments, 
    getProcedures, 
    getProfessionals, 
    scheduleAppointment 
} from '../../actions';

const ScheduleAppointmentPage = ({appointmentEditor, getEstablishments, getProcedures, getProfessionals, scheduleAppointment}) => 
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
            updateProcedures={getProcedures}
            updateProfessionals={getProfessionals}
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
    scheduleAppointment 
}
const mapStateToProps = ({pacient}) => ({appointmentEditor: pacient.appointmentEditor});
export default connect(mapStateToProps, action)(ScheduleAppointmentPage);