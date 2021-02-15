import React, { useState } from 'react';
import Calendar from 'react-calendar';

import ComulativePicker from './reusables/CumulativePicker';

export default ({onGenerateReport, onAddEstablishment, onAddProcedure}) =>
{
    const [establishments, setEstablishments] = useState([]);
    const [filterProcedures, setFilterProcedures] = useState(false);
    const [procedures, setProcedures] = useState([]);
    const [range, setRange] = useState([new Date(), new Date()]);

    const submitForm = (e) =>
    {
        e.preventDefault();
        onGenerateReport(
            {
                establishments,
                procedures,
                range
            }
        )
    }

    const layout =
    (
        <form className="ui form" onSubmit={submitForm}>
            <div className="field">
                <label>Estabelecimentos</label>
                <ComulativePicker
                    placeholder={'estabelecimento'}
                    selected={establishments}
                    addElement={term => onAddEstablishment(term, [establishments, setEstablishments])}
                    removeElement={establishment => setEstablishments(establishments.filter(e => e.id !== establishment.id))}
                />
            </div>
            <div className="field">
                <div className="ui checkbox">
                    <input
                        type='checkbox'
                        name='filter-procedures'
                        value={filterProcedures}
                        onChange={e => setFilterProcedures(!filterProcedures)} 
                    />
                    <label>Filtrar procedimentos</label>
                </div>
            </div>
            {
                filterProcedures &&
                <div className="field">
                    <label>Procedimentos</label>
                    <ComulativePicker
                        placeholder={'procedimento'}
                        selected={procedures}
                        addElement={term => onAddProcedure(term, [procedures, setProcedures])}
                        removeElement={procedure => setProcedures(procedures.filter(p => p.id !== procedure.id))}
                    />
                </div>                
            }
            <div className="field left floated">
                <label>Data</label>
                <Calendar
                    value={range}
                    onChange={setRange}
                    selectRange
                />
            </div>
            <button className="ui button primary" type="submit" onClick={submitForm}>Gerar Relatório</button>
        </form>
    )

    return layout;
}