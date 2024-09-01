import axios from "axios";
import { config as configGlobal } from "~~/lib/config";

const request = axios.create({
	baseURL: configGlobal.NUXT_APP_API_URL,
	headers: {
		// channel: config.CHANNEL,
		// Authorization: `Bearer ${token}`
	},
});

//xu ly data truoc khi gui server
// request.interceptors.request.use(
//     async (config: any) => {
//         // config.headers[contants.COOKIE_LANGUAGE] = Cookies.get(contants.COOKIE_LANGUAGE) || 'vi';
//         // config.headers.Authorization =
//         //     Cookies.get('token') != (null || undefined) ? `Bearer ${Cookies.get('token')}` : '';

//         const token = useCookie('token').value;
//         config.headers.Authorization = `Bearer ${token}`;
//         // console.log(token)

//         return config;
//     },
//     (err) => {
//         return Promise.reject(err);
//     },
// );

//xu ly data sau khi response tu server
// request.interceptors.response.use(
//     (response) => {
//         if (response.status >= 200 && response.status < 300) {
//             return response.data;
//         }
//         return Promise.reject(response);
//     },
//     (error) => {
//         if (error.code === 'ECONNABORTED') {
//             // $toast.error('Lỗi kết nối đến server');
//         } else if (error.code === 'ERR_BAD_REQUEST') {
//             return error.response.data;
//         } else if (error.response) {
//         } else {
//             // $toast.error('Lỗi kết nối đến server');
//         }

//         return Promise.reject(error);
//     },
// );

export const get = async <T = any>(path: string, req: any = { params: {} }) => {
	const response = await request.get<T, any>(path, req);
	return response;
};

export const post = async <T = any>(path: string, req: any = {}) => {
	const response = await request.post<T, any>(path, req);
	return response;
};

export const put = async <T = any>(path: string, req?: any) => {
	const response = await request.put<T, any>(path, req);
	return response;
};

export const patch = async <T = any>(path: string, req?: any) => {
	const response = await request.patch<T, any>(path, req);
	return response;
};

export const del = async <T = any>(path: string, req?: any) => {
	const response = await request.delete<T, any>(path, req);
	return response;
};

export const postFormData = async <T = any>(path: string, req?: any) => {
	const response = await request.post<any, any>(path, req);
	return response;
};

export default request;
