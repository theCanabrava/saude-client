import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dropdown from './reusables/Dropdown';

export default ({onSubmitAppointment, establishments, procedures, professionals, updateProcedures, updateProfessionals}) =>
{
    const [establishment, setEstablishment] = useState({id: '-1', name: 'Estabelecimento'});
    const [procedure, setProcedure] = useState({id: '-1', name: 'Procedimento'});
    const [professional, setProfessional] = useState({id: '-1', name: 'Profissional', availability:{startTime: '00:00', endTime: '00:00'}});
    const [hour, setHour] = useState({id: '-1', name: 'Horário'});
    const [availableHours, setAvailableHours] = useState([]);
    const [date, setDate] = useState(new Date());

    const onSelectedEstablishment = establishment =>
    {
        setEstablishment(establishment);
        updateProcedures(establishment);
    }

    const onSelectedProcedure = procedure =>
    {
        setProcedure(procedure);
        updateProfessionals(establishment, procedure);
    }

    const onSelectedProfessional = professional =>
    {
        setProfessional(professional);
        const times = [{id: professional.availability.startTime, name:professional.availability.startTime}];
        while(times[times.length-1].name < professional.availability.endTime)
        {
            let [hour, minute] = times[times.length-1].name.split(':');
            if(minute === '00') minute = '30';
            else hour = String(Number(hour) + 1).padStart(2, '0');
            const time = `${hour}:${minute}`;
            if(time !== professional.availability.endTime) times.push({id: time, name:time});
        }
        setAvailableHours(times);
    }

    const submitForm = (e) =>
    {
        e.preventDefault();
        onSubmitAppointment(
            {
                establishment,
                procedure,
                professional,
                hour,
                date
            }
        );
    }

    const tileDisabled = (ev) =>
    {
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
            <div className="field">
                <label>Horário</label>
                <Dropdown
                    options={availableHours}
                    selectionHook={[hour, setHour]}
                />
            </div>
            <div className="field left floated">
                <label>Data</label>
                <Calendar
                    value={date}
                    onChange={setDate}
                    tileDisabled={tileDisabled}
                />
            </div>
            <button className="ui button primary" type="submit" onClick={submitForm}>Agendar</button>
        </form>
    )

    return layout;
}