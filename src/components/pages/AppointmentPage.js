import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AppointmentLayout from './layouts/AppointmentLayout';
import { getPacientAppointments, getProfessionalAppointments, confirmProfessional } from '../../actions';

const ScheduleAppointmentPage = ({appointments, permission, getPacientAppointments, getProfessionalAppointments, confirmProfessional,administratorGetAppointments}) => 
{
    useEffect(() =>
    {
        if(permission === 'pacient') getPacientAppointments();
        else if(permission === 'professional') getProfessionalAppointments();
    }, []);

    const page =
    (
        <AppointmentLayout 
            appointments={appointments}
            onPressConfirm={(id) => confirmProfessional(id)}
            onPressReSchedule={() => console.log('Should reschedule appointment')}
            permission={permission}
        />
    )

    return page;
}

const action = 
{ 
    getPacientAppointments, 
    getProfessionalAppointments,
    confirmProfessional,
}

const mapStateToProps = ({auth, pacient, professional}) => 
{
    let appointments = [];
    if(auth.permission === 'pacient') appointments = pacient.appointments;
    else if(auth.permission === 'professional') appointments = professional.appointments;

    const props =
    {
        permission: auth.permission,
        appointments: appointments
    }
    return props;
}
export default connect(mapStateToProps, action)(ScheduleAppointmentPage);