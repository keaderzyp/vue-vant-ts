import axios from '@/http';
interface LoginParams{
	username?:string;
	password?:string;
}
export const getLogin = async (data:LoginParams){
	return await axios({
		url:'/login',
		method:'post',
		data
	})
}
