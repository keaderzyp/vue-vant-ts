import axios from '@/http';
interface LoginParams{
	username?:string;
	password?:string;
}
const api = {
	async getLogin(data:LoginParams){
		return await axios({
			url:'/login',
			method:'post',
			data
		})
	}
}
export default api;