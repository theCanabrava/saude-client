import React, { useState } from 'react';
import Calendar from 'react-calendar';

import ComulativePicker from './reusables/CumulativePicker';

export default ({establishments, procedures, onGenerateReport, onAddEstablishment, onRemoveEstablishment, onAddProcedure, onRemoveProcedure}) =>
{
    const [filterProcedures, setFilterProcedures] = useState(false);
    const [range, setRange] = useState([new Date(), new Date()]);

    const makeIdList = array =>
    {
        const ids = [];
        for(let obj of array) ids.push(obj.id);
        return ids;
    }

    const submitForm = (e) =>
    {
        e.preventDefault();
        const establishmentIds = makeIdList(establishments);
        const procedureIds = makeIdList(procedures);
        onGenerateReport(
            {
                establishmentIds,
                procedureIds,
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
                    addElement={term => onAddEstablishment(term)}
                    removeElement={establishment => onRemoveEstablishment(establishment)}
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
                        addElement={term => onAddProcedure(term)}
                        removeElement={procedure => onRemoveProcedure(procedure)}
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