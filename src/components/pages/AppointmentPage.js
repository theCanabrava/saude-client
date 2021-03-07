import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import AppointmentLayout from './layouts/AppointmentLayout';
import { getPacientAppointments, getProfessionalAppointments, getEstablishmentAppointments, confirmProfessional, confirmEstablishment } from '../../actions';

const ScheduleAppointmentPage = ({appointments, permission, getPacientAppointments, getProfessionalAppointments, confirmProfessional, getEstablishmentAppointments, confirmEstablishment}) => 
{
    const { id } = useParams();

    useEffect(() =>
    {
        if(permission === 'pacient') getPacientAppointments();
        else if(permission === 'professional') getProfessionalAppointments();
        else if(permission === 'administrator') getEstablishmentAppointments('602bea95257b5517a30e36cf');
    }, []);

    const confirmAppointment = (id) =>
    {
        if(permission === 'professional') confirmProfessional(id)
        else if(permission === 'administrator') confirmEstablishment('602bea95257b5517a30e36cf', id);
    }

    const page =
    (
        <AppointmentLayout 
            appointments={appointments}
            onPressConfirm={(id) => confirmAppointment(id)}
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
    getEstablishmentAppointments,
    confirmProfessional,
    confirmEstablishment
}

const mapStateToProps = ({auth, pacient, professional, admin}) => 
{
    let appointments = [];
    if(auth.permission === 'pacient') appointments = pacient.appointments;
    else if(auth.permission === 'professional') appointments = professional.appointments;
    else if(auth.permission === 'administrator') appointments = admin.appointments;

    const props =
    {
        permission: auth.permission,
        appointments: appointments
    }
    return props;
}
export default connect(mapStateToProps, action)(ScheduleAppointmentPage);