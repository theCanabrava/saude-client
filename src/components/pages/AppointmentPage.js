import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import AppointmentLayout from './layouts/AppointmentLayout';
import { getPacientAppointments, getProfessionalAppointments, getEstablishmentAppointments, confirmProfessional, confirmEstablishment, finsihAppointment } from '../../actions';

const AppointmentPage = (
    {
        appointments, 
        permission, 
        getPacientAppointments, 
        getProfessionalAppointments, 
        confirmProfessional, 
        getEstablishmentAppointments, 
        confirmEstablishment,
        finsihAppointment
}) => 
{
    const { establishmentId } = useParams();
    
    useEffect(() =>
    {
        if(permission === 'pacient') getPacientAppointments();
        else if(permission === 'professional') getProfessionalAppointments();
        else if(permission === 'administrator') getEstablishmentAppointments(establishmentId);
    }, []);

    const confirmAppointment = (id) =>
    {
        if(permission === 'professional') confirmProfessional(id)
        else if(permission === 'administrator') confirmEstablishment(establishmentId, id);
    }

    const page =
    (
        <AppointmentLayout 
            appointments={appointments}
            onPressConfirm={(id) => confirmAppointment(id)}
            onPressFinish={(id) => finsihAppointment(id)}
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
    confirmEstablishment,
    finsihAppointment
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
export default connect(mapStateToProps, action)(AppointmentPage);