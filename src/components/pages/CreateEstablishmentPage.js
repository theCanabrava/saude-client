import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CreateEstablishmentLayout from './layouts/CreateEstablishmentLayout';
import { 
    addProcedure, 
    removeProcedure, 
    addProfessional, 
    removeProfessional, 
    resetEstablishment, 
    getEstablishment,
    createEstablishment,
    editEstablishment
} from '../../actions';

const emptyDefaults =
{
    name: '',
    address: '',
    type: {id: '-1', name: 'Tipo'}
}

const CreateEstablishmentPage = 
({
    procedures, 
    professionals, 
    addProcedure, 
    removeProcedure, 
    addProfessional, 
    removeProfessional, 
    resetEstablishment, 
    getEstablishment,
    createEstablishment,
    editEstablishment,
    location
}) => 
{
    useEffect(() =>
    {
        if(location.state) getEstablishment(location.state.establishment.id);
        else resetEstablishment();
    }, []);

    const page =
    (
        <CreateEstablishmentLayout
            defaults=
            {
                location.state ?
                {
                    name: location.state.establishment.name,
                    address: location.state.establishment.address,
                    type: {id: '-1', name: location.state.establishment.type},
                    establishmentId: location.state.establishment.id
                } : emptyDefaults
            }
            procedures={procedures}
            professionals={professionals}
            onAddProcedure={addProcedure}
            onRemoveProcedure={removeProcedure}
            onAddProfessional={addProfessional}
            onRemoveProfessional={removeProfessional}
            onSubmitEstabilthment={createEstablishment}
            onEditEstablishment={editEstablishment}
        />
    )

    return page;
}

const actions = 
{ 
    addProcedure, 
    removeProcedure, 
    addProfessional, 
    removeProfessional, 
    resetEstablishment, 
    getEstablishment,
    createEstablishment,
    editEstablishment
};
const mapStateToProps = ({admin}) => ({procedures: admin.procedures, professionals: admin.professionals});
export default connect(mapStateToProps, actions)(CreateEstablishmentPage);