import React from 'react';
import { connect } from 'react-redux';

import GenerateReportLayout from './layouts/GenerateReportLayout';
import { 
    addEstablishmentToReport, 
    removeEstablishmentFromReport, 
    addProcedureToReport, 
    removeProcedureFromReport, 
    checkReport,
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
    checkReport,
    generateReport,
    error
}) =>
(
    <GenerateReportLayout
        establishments={establishments}
        procedures={procedures}
        onAddEstablishment={addEstablishmentToReport}
        onRemoveEstablishment={removeEstablishmentFromReport}
        onAddProcedure={addProcedureToReport}
        onRemoveProcedure={removeProcedureFromReport}
        onSetDateRange={checkReport}
        onGenerateReport={generateReport}
        error={error}
    />
)

const actions =
{
    addEstablishmentToReport, 
    removeEstablishmentFromReport, 
    addProcedureToReport, 
    removeProcedureFromReport, 
    checkReport,
    generateReport
}
const mapStateToProps = ({healthOrganization}) => 
({
    establishments: healthOrganization.establishments, 
    procedures: healthOrganization.procedures,
    error: healthOrganization.error
})
export default connect(mapStateToProps, actions)(GenerateReportPage);