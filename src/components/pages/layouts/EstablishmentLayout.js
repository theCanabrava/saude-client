import React from 'react';
import { Link } from 'react-router-dom';

const renderCell = (establishment) =>
{
    const cell =
    (
        <div className="item" key={establishment.id}>
            <div className="content">
                <h3>Estabelecimento: {establishment.name}</h3>
                <div className="description">
                    <p><strong>Tipo:</strong> {establishment.type}</p>
                    <p><strong>Endereço:</strong> {establishment.address}</p>
                </div>
                <div className="extra">
                    <Link 
                        className="ui right floated primary button"
                        to={`/agendamento/${establishment.id}`}
                    >
                        Agendamentos
                    </Link>
                </div>
            </div>
        </div>
    )

    return cell;
}

export default ({establishments}) =>
{
    const establishmentCells = establishments.map(e => renderCell(e));

    const layout = 
    (
        <div className="ui items">
            {establishmentCells}
            <div className="ui divider"/>
            <Link to='/estabelecimento/criar' className="ui button primary">Cadastrar</Link>
        </div>
    )

    return layout;
}