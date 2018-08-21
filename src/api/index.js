import http from './request';



// export const login = data => http.post('/user/login', data, null, { params: { "loginType": 3 } });

// export const logout = () => http.get('/user/logout');

export const getlistSort =()=>http.post('api/listSort');
