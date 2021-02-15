import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CreateEstablishmentLayout from './layouts/CreateEstablishmentLayout';
import { 
    addProcedure, 
    removeProcedure, 
    addProfessional, 
    removeProfessional, 
    resetEstablishment, 
    createEstablishment 
} from '../../actions';

const CreateEstablishmentPage = 
({
    procedures, 
    professionals, 
    addProcedure, 
    removeProcedure, 
    addProfessional, 
    removeProfessional, 
    resetEstablishment, 
    createEstablishment
}) => 
{
    useEffect(() =>
    {
        resetEstablishment();
    }, []);

    const page =
    (
        <CreateEstablishmentLayout
            procedures={procedures}
            professionals={professionals}
            onAddProcedure={addProcedure}
            onRemoveProcedure={removeProcedure}
            onAddProfessional={addProfessional}
            onRemoveProfessional={removeProfessional}
            onSubmitEstabilthment={createEstablishment}
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
    createEstablishment 
};
const mapStateToProps = ({admin}) => ({procedures: admin.procedures, professionals: admin.professionals});
export default connect(mapStateToProps, actions)(CreateEstablishmentPage);