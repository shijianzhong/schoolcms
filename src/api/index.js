import http from './request';



// export const login = data => http.post('/user/login', data, null, { params: { "loginType": 3 } });

// export const logout = () => http.get('/user/logout');

export const getlistSort = () => http.post('api/listSort');

export const getCarouselList = () => http.post('api/getCarouselList')

export const getEmitInfoList = () => http.post('api/getEmitInfoList')

export const getCasesList = () => http.post('api/getCasesList')

export const SelectInterDynamics = () => http.post('api/SelectInterDynamics')

export const UpdateInterDynamicsReadtimes = (data) => http.post('api/UpdateInterDynamicsReadtimes', data)

export const InsertSignUpInfo = (data) => http.post('api/InsertSignUpInfo', data)