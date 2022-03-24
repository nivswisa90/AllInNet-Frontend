import axios from 'axios';

let instance
console.log('process', process.env.REACT_APP_NODE_ENV)
if (process.env.REACT_APP_NODE_ENV.startsWith('dev')) {
    instance = axios.create({
        baseURL: `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}`
    });
} else {
    instance = axios.create({});
}
export default instance