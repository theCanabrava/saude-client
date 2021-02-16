import axios from 'axios';
import paths from './paths';

const config =
{
    baseURL: paths.ROOT
}

const health = axios.create(config);
export default health;