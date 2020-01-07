import axios from 'axios'

const authProvider = {
    login: ({username, password}) => {
        return axios.post('/api/v1/admin/login', {username, password})
    },
    logout: params => Promise.resolve(),
    checkAuth: params => Promise.reject(),
    checkError: error => Promise.reject(),
    getPermissions: params => Promise.resolve(),
};

export default authProvider
