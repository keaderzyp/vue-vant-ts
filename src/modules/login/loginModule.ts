import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import router from '@/router';
import {getLogin} from '@/api/login/loginApi';

@Module({
	name: 'LoginModule',
	namespaced: true,
	stateFactory: true,
	dynamic: true, 
	store: store
})
export default class LoginModule extends VuexModule {
	public username?:string = ""
	
	public password?:string = ""
	
	public userMessage?:string = ''
	
	public passMessage?:string = ''
	
	public loading?:boolean = false
	
	public loadingText:string = '提交中'
	
	get getPassword(){
		return this.password;
	}
	get getUsername(){
		return this.username;
	}
	@Mutation
	setUsername(val:string){
		this.username = val;
	}
	
	@Mutation
	setPassword(val:string){
		this.password = val;
	}
	@Mutation
	setUserMessage(val:string){
		this.userMessage = val;
	}
	@Mutation
	setPassMessage(val:string){
		this.passMessage = val;
	}
	@Mutation
	setLoading(val:boolean){
		this.loading = val;
	}
	@Action
	async validateAndSub(){
		if(this.username!=undefined&&this.username.trim().length==0){
			this.setUserMessage("用户名不可以为空");
			return;
		}else{
			this.setUserMessage("");
		}
		if(this.password!=undefined&&this.password.trim().length==0){
			this.setPassMessage("密码不可以为空");
			return;
		}else{
			this.setPassMessage("");
		}
		this.setLoading(true);
		let _this = this;
		let res = await getLogin({
			username:this.getUsername,
			password:this.getPassword
		});
		this.setLoading(false);
		if(res.data.ret==0){
			router.push('/')
		}
	}
}