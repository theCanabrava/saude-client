import React, { useState } from 'react'

export default ({options, selectionHook}) =>
{
    const [selected, setSelected] = selectionHook;
    const [open, setOpen] = useState('');

    const optionElements = options.map(o => 
    ( 
        <div 
            key={o.id}
            className={`item ${selected.id === o.id ? 'active selected' : ''}`} 
            onClick={() => setSelected(o)}
        >
            {o.name}
        </div>
    ))

    const dropdown =
    (
        <div 
            className={`ui selection dropdown ${open ? 'active visible' : ''}`}
            onClick={() => setOpen(!open)}
        >
            <i className="dropdown icon"></i>
            <div className="text">{selected.name}</div>
            <div className={`menu ${open ? 'transition visible' : ''}`}>
                {optionElements}
            </div>
        </div>
    )

    return dropdown
}