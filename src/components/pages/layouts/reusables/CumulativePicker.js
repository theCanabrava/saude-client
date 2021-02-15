import React, { useState } from 'react';

export default ({addElement, removeElement, selected, placeholder}) =>
{
    const [term, setTerm] = useState('');

    const onClickAdd = (e) =>
    {
        e.preventDefault();
        addElement(term);
    }

    const onClickRemove = (e, option) =>
    {
        e.preventDefault();
        removeElement(option);
    }

    const selectedElements = selected.map(o => 
    ( 
        <div key={o.id}>
            <div className="ui action input">
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={o.name}
                    disabled
                />
                <button 
                    className="ui button negative"
                    onClick={e => onClickRemove(e, o)}
                >
                    Remover
                </button>
            </div>
        </div>
    ))

    const picker =
    (
        <>
            <div className="ui action input">
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
                <button 
                    className="ui button primary"
                    onClick={onClickAdd}
                >
                    Adicionar
                </button>
            </div>
            <div className="ui class divider"/>
            {selectedElements}
        </>
    )

    return picker;
}