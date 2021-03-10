import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import EstablishmentLayout from './layouts/EstablishmentLayout';
import { getAdminEstablishments } from '../../actions';

const EstablishmentPage = ({establishments, getAdminEstablishments}) => 
{
    useEffect(() => { getAdminEstablishments(); }, []);


    const page = ( <EstablishmentLayout establishments={establishments}/> );

    return page;
}

const action = {  getAdminEstablishments }

const mapStateToProps = ({admin}) => ({establishments: admin.establishments})
export default connect(mapStateToProps, action)(EstablishmentPage);