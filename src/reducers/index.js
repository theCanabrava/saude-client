import { combineReducers } from 'redux';

import authStore from './authStore';
import adminStore from './adminStore';
import pacientStore from './pacientStore';
import hoStore from './hoStore';

const reducers =
{
    auth: authStore,
    admin: adminStore,
    pacient: pacientStore,
    healthOrganization: hoStore
}

export default combineReducers(reducers);