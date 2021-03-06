import React from 'react';
import { Link } from 'react-router-dom';

const unselectedDefault =
{
    establishment: {id: '-1', name: 'Estabelecimento'},
    procedure: {id: '-1', name: 'Procedimento'},
    professional: {id: '-1', name: 'Profissional'}
}

const renderStatus = (appointment) =>
{
    if(appointment.status.complete) return 'Realizado';
    else if(appointment.status.professionalConfirmed && appointment.status.establishmentConfirmed) return 'Confirmado';
    else
    {
        if(new Date() > new Date(appointment.date)) return "Cancelado";
        else return "Pendente"
    }
}

const canConfirm = (appointment, permission) =>
{
    if(new Date() > new Date(appointment.date)) return false;
    if(permission === 'professional' && !appointment.status.professionalConfirmed) return true;
    else if(permission === 'administrator' && !appointment.status.establishmentConfirmed) return true;
    return false
}

const canFinish = (appointment, permission) =>
{
    if(permission === 'professional')
    {
        if(appointment.status.professionalConfirmed && appointment.status.establishmentConfirmed)
        {
            if(!appointment.status.complete) return true;
        }
    }
    return false
}

const renderCell = (appointment, permission, onConfirm, onFinish) =>
{
    const date = new Date(appointment.date);
    const dateString = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${appointment.time}`
    const cell =
    (
        <div className="item" key={appointment.id}>
            <div className="content">
                <h3>Agendamento: {appointment.id}</h3>
                <div className="description">
                    <p><strong>Paciente:</strong> {appointment.pacient.name}</p>
                    <p><strong>Profissional:</strong> {appointment.professional.name}</p>
                    <p><strong>Estabelecimento:</strong> {appointment.establishment.name} - {appointment.establishment.address}</p>
                    <p><strong>Procedimento:</strong> {appointment.procedure.name} - {appointment.procedure.type}</p>
                    <p><strong>Status:</strong> {renderStatus(appointment)}</p>
                    <p>{dateString}</p>
                </div>
                <div className="extra">
                    {permission === 'pacient' &&
                    
                        <Link 
                            to=
                            {{
                                pathname: 'agendamento/marcar', 
                                state: 
                                {
                                    defaults: 
                                    {
                                        establishment: appointment.establishment, 
                                        procedure: appointment.procedure, 
                                        professional: appointment.professional
                                    }
                                }
                            }}
                            className="ui right floated button primary"
                        >
                            Re-agendar
                        </Link>
                    }
                    {canConfirm(appointment, permission) && 
                        <button 
                            className="ui right floated primary button"
                            onClick={() => onConfirm(appointment.id)}    
                        >
                            Confirmar
                        </button>
                    }
                    {canFinish(appointment, permission) && 
                        <button 
                            className="ui right floated primary button"
                            onClick={() => onFinish(appointment.id)}    
                        >
                            Finalizar
                        </button>
                    }
                </div>
            </div>
        </div>
    )

    return cell;
}

export default ({appointments, permission, onPressConfirm, onPressFinish}) =>
{
    const appointmentCells = appointments.map(a => renderCell(a, permission, onPressConfirm, onPressFinish));

    const layout = 
    (
        <div className="ui items">
            {appointmentCells}
            <div className="ui divider"/>
            {
                permission === 'pacient' && 
                <Link 
                    to={{pathname: 'agendamento/marcar', state: {defaults: unselectedDefault}}}
                    className="ui button primary"
                >
                    Marcar Consulta
                </Link>
            }
        </div>
    )

    return layout;
}