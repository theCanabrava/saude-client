import React from 'react';
import { connect } from 'react-redux';

import LoginLayout from './layouts/LoginLayout';
import { login } from '../../actions';

const LoginPage = ({login}) => 
(
    <LoginLayout
        onLogin={login}
    />
)

const actions = { login }
export default connect(undefined, actions)(LoginPage)