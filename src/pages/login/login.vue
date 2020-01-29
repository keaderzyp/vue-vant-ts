<template>
	<div class="router-page">
		<van-field placeholder="请输入用户名"
			v-model="username" clearable
			:error-message="userMessage"
			left-icon="user-o"></van-field>
		<van-field placeholder="请输入密码" v-model="password" 
			type="password" clearable
			left-icon="edit"
			:error-message="passMessage"></van-field>
		<van-button type="primary" :loading="loading" :loading-text="loadingText" size="large"
			@click="handleSub">提交</van-button>
	</div>
</template>

<script>
	import '@/modules/login/loginModule';
	import {
		Vue,
		Component
	} from 'vue-property-decorator';
	import {
		State,
		Getter,
		Action,
		Mutation,
		namespace
	} from 'vuex-class';

	const LoginModule = namespace('LoginModule');

	@Component
	export default class Login extends Vue {

		@LoginModule.State("userMessage") userMessage

		@LoginModule.State("passMessage") passMessage
		
		@LoginModule.State("loadingText") loadingText
		
		@LoginModule.State("loading") loading
		
		@LoginModule.Mutation("setUsername") setUsername

		@LoginModule.Getter("getUsername") getUsername
		
		@LoginModule.Mutation("setPassword") setPassword
		
		@LoginModule.Getter("getPassword") getPassword
		
		@LoginModule.Action("validateAndSub") validateAndSub
		
		set username(val){
			this.setUsername(val)
		}
		
		get username(){
			return this.getUsername;
		}

		set password(val){
			this.setPassword(val)
		}
		
		get password(){
			return this.getPassword;
		}
		handleSub(){
			this.validateAndSub();
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.router-page{
		background: #eee;
		padding-top: 100px;
	}
</style>
