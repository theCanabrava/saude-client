import health from './client/health';
import jwt from 'jsonwebtoken';
import paths from './client/paths';

const Auth =
{
    login: async (email, password) =>
    {
        const response = await health.post(paths.AUTH.LOGIN, {email, password});
        health.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        const decoded = await jwt.decode(response.data.token);
        return decoded;
    }
}

export default Auth;