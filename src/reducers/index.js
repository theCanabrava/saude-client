import { combineReducers } from 'redux';

import authStore from './authStore';
import adminStore from './adminStore';
import pacientStore from './pacientStore';
import hoStore from './hoStore';
import professionalStore from './professionalStore';

const reducers =
{
    auth: authStore,
    admin: adminStore,
    pacient: pacientStore,
    professional: professionalStore,
    healthOrganization: hoStore
}

export default combineReducers(reducers);