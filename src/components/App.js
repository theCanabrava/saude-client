import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import CreateEstablishmentPage from './pages/CreateEstablishmentPage';
import GenerateReportPage from './pages/GenerateReportPage';
import HomePage from './pages/HomePage';
import AppHeader from './pages/layouts/reusables/AppHeader';
import LoginPage from './pages/LoginPage';
import ScheduleAppointmentPage from './pages/ScheduleAppointmentPage';
import AppointmentPage from './pages/AppointmentPage';
import EstalishmentPage from './pages/EstalishmentPage';

import { connect } from 'react-redux';

const App = ({isSignedIn}) =>
{
    useEffect(() =>
    {
        if(!isSignedIn) history.push('/login');
    }, [])

    let app =
    (
        <Router history={history}>
            <div className="ui container">
                <AppHeader/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/estabelecimento" exact component={EstalishmentPage}/>
                    <Route path="/estabelecimento/criar" exact component={CreateEstablishmentPage}/>
                    <Route path="/agendamento/marcar" exact component={ScheduleAppointmentPage}/>
                    <Route path="/agendamento" exact component={AppointmentPage}/>
                    <Route path="/agendamento/:establishmentId" exact component={AppointmentPage}/>
                    <Route path="/relatorio/gerar" exact component={GenerateReportPage}/>
                </Switch>
            </div>
        </Router>
    )

    return app;
}

const mapStateToProps = ({auth}) => ({isSignedIn: auth.isSignedIn});
export default connect(mapStateToProps)(App);