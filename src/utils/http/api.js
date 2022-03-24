import request from './request';

// 注册
export const RegisterApi = (data) => request.post('/register', data);

// 登陆
export const LoginApi = (data) => request.post('/login', data);
