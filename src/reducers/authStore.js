import { types } from '../actions'

const INITIAL_STATE =
{
    isSignedIn: false,
    userId: '',
    permission: ''
}

export default (state = INITIAL_STATE, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const handleLogin = (state, payload) => ({isSignedIn: true, ...payload})
const handleLogout = (state, payload) => ({...INITIAL_STATE})

const handlers =
{
    [types.LOGIN]: handleLogin,
    [types.LOGOUT]: handleLogout,
    hasHandler: key => handlers[key] !== undefined
}