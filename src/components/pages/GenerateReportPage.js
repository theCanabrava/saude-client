import React from 'react';
import { connect } from 'react-redux';

import GenerateReportLayout from './layouts/GenerateReportLayout';
import { 
    addEstablishmentToReport, 
    removeEstablishmentFromReport, 
    addProcedureToReport, 
    removeProcedureFromReport, 
    generateReport
} from '../../actions';

const GenerateReportPage = 
({
    establishments, 
    procedures, 
    addEstablishmentToReport, 
    removeEstablishmentFromReport, 
    addProcedureToReport, 
    removeProcedureFromReport, 
    generateReport
}) =>
(
    <GenerateReportLayout
        establishments={establishments}
        procedures={procedures}
        onAddEstablishment={addEstablishmentToReport}
        onRemoveEstablishment={removeEstablishmentFromReport}
        onAddProcedure={addProcedureToReport}
        onRemoveProcedure={removeProcedureFromReport}
        onGenerateReport={generateReport}
    />
)

const actions =
{
    addEstablishmentToReport, 
    removeEstablishmentFromReport, 
    addProcedureToReport, 
    removeProcedureFromReport, 
    generateReport
}
const mapStateToProps = ({healthOrganization}) => 
({
    establishments: healthOrganization.establishments, 
    procedures: healthOrganization.procedures
})
export default connect(mapStateToProps, actions)(GenerateReportPage);