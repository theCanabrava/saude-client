import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dropdown from './reusables/Dropdown';

export default ({defaults, onSubmitAppointment, establishments, procedures, professionals, availability, updateProcedures, updateProfessionals, updateAvailability}) =>
{
    const [establishment, setEstablishment] = useState(defaults.establishment);
    const [procedure, setProcedure] = useState(defaults.procedure);
    const [professional, setProfessional] = useState(defaults.professional);
    const [hour, setHour] = useState({id: '-1', name: 'Horário'});
    const availableHours = availability.map(a => ({id: a, name: a}))
    const [date, setDate] = useState(new Date());

    const enabled = hour.id !== '-1';

    const onSelectedEstablishment = establishment =>
    {
        setEstablishment(establishment);
        updateProcedures(establishment);
        setProcedure({id: '-1', name: 'Procedimento'});
        setProfessional({id: '-1', name: 'Profissional'});
        setHour({id: '-1', name: 'Horário'});
    }

    const onSelectedProcedure = procedure =>
    {
        setProcedure(procedure);
        updateProfessionals(establishment, procedure);
        setProfessional({id: '-1', name: 'Profissional'});
        setHour({id: '-1', name: 'Horário'});
    }

    const onSelectedProfessional = professional =>
    {
        setProfessional(professional);
        setHour({id: '-1', name: 'Horário'});
    }

    const onSelectedDate = date =>
    {
        setDate(date);
        updateAvailability(professional.id, date);
    }

    const submitForm = (e) =>
    {
        e.preventDefault();
        onSubmitAppointment(
            {
                establishmentId: establishment.id,
                procedureId: procedure.id,
                professionalId: professional.id,
                time: hour.id,
                date
            }
        );
    }

    const tileDisabled = (ev) =>
    {
        if(professional.id === '-1') return true;
        if (ev.view === 'month') {
            return new Date() >= ev.date;
        }
    }

    const layout = 
    (
        <form className="ui form" onSubmit={submitForm}>
            <div className="field">
                <label>Estabelecimento</label>
                <Dropdown
                    options={establishments}
                    selectionHook={[establishment, onSelectedEstablishment]}
                />
            </div>
            <div className="field">
                <label>Procedimento</label>
                <Dropdown
                    options={procedures}
                    selectionHook={[procedure, onSelectedProcedure]}
                />
            </div>
            <div className="field">
                <label>Profissional</label>
                <Dropdown
                    options={professionals}
                    selectionHook={[professional, onSelectedProfessional]}
                />
            </div>
            <div className="field left floated">
                <label>Data</label>
                <Calendar
                    value={date}
                    onChange={onSelectedDate}
                    tileDisabled={tileDisabled}
                />
            </div>
            <div className="field">
                <label>Horário</label>
                <Dropdown
                    options={availableHours}
                    selectionHook={[hour, setHour]}
                />
            </div>
            <button 
                className={`ui button primary ${enabled ? '' : 'disabled'}`}
                type="submit"
                onClick={submitForm}
            >
                Agendar
            </button>
        </form>
    )

    return layout;
}