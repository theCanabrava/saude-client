import React, { useState } from 'react';
import CumulativePicker from './reusables/CumulativePicker';
import Dropdown from './reusables/Dropdown';

export default ({onSubmitEstabilthment, onAddProcedure, onRemoveProcedure, onAddProfessional, onRemoveProfessional, procedures, professionals}) =>
{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [type, setType] = useState({id: '-1', name: 'Tipo'});

    const makeIdList = array =>
    {
        const ids = [];
        for(let obj of array) ids.push(obj.id);
        return ids;
    }

    const submitForm = (e) =>
    {
        e.preventDefault();
        const procedureIds = makeIdList(procedures)
        const professionalIds = makeIdList(professionals);
        onSubmitEstabilthment(
            {
                name,
                address,
                type: type.name,
                procedureIds,
                professionalIds
            }
        )
    }

    const layout = 
    (
        <form className="ui form" onSubmit={submitForm}>
            <div className="field">
                <label>Nome</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Endereço</label>
                <input 
                    type="text" 
                    name="address" 
                    placeholder="endereço"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Tipo</label>
                <Dropdown
                    options={
                        [
                            {id: '0', name: 'Hospital'},
                            {id: '1', name: 'Clínica'},
                            {id: '2', name: 'Farmácia'},
                            {id: '3', name: 'Laboratório'},
                        ]
                    }
                    selectionHook={[type, setType]}
                />
            </div>
            <div className="field">
                <label>Procedimentos</label>
                <CumulativePicker
                    placeholder='procedimento'
                    selected={procedures}
                    addElement={term => onAddProcedure(term)}
                    removeElement={procedure => onRemoveProcedure(procedure.id)}
                />
            </div>
            <div className="field">
                <label>Profissionais</label>
                <CumulativePicker
                    placeholder='profissional'
                    selected={professionals}
                    addElement={term => onAddProfessional(term)}
                    removeElement={procedure => onRemoveProfessional(procedure.id)}
                />
            </div>
            <button className="ui button primary" type="submit" onClick={submitForm}>Criar</button>
        </form>
    )

    return layout;
}