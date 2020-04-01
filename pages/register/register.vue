<template>
	<view>
		<uni-status-bar />
		<view class="d-flex a-center j-sb py-2 px-3 text-light-muted">
			<view class="iconfont icon-shanchu1" @click="goBack"></view>
		</view>

		<view class="p-5">
			<view class="font-big mb-5">用户注册</view>

			<input type="text" class="border-bottom mb-4 uni-input px-0" placeholder="请输入手机号/邮箱/账号" v-model="username"
			 placeholder-class="text-light-muted" @focus="focus('username')" @blur="blur('username')" :class="focusClass.username ? 'input-border-color' : ''" />
			
			<input type="text" class="border-bottom mb-4 uni-input px-0" placeholder="请输昵称" v-model="nickname"
			 placeholder-class="text-light-muted" @focus="focus('nickname')" @blur="blur('nickname')" :class="focusClass.nickname ? 'input-border-color' : ''" />

			<input type="text" class="border-bottom mb-4 uni-input px-0" placeholder="请输入密码" v-model="password"
			 placeholder-class="text-light-muted" @focus="focus('password')" @blur="blur('password')" :class="focusClass.password ? 'input-border-color' : ''" />

			<input type="text" class="border-bottom mb-4 uni-input px-0" placeholder="请再次输入密码" v-model="password2"
			 placeholder-class="text-light-muted" @focus="focus('password2')" @blur="blur('password2')" :class="focusClass.password2 ? 'input-border-color' : ''" />
			<view class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4" hover-class="main-bg-hover-color"
			 @click="submit">
				注册
			</view>
		</view>

	</view>
</template>

<script>
	import uniStatusBar from "@/components/uni-ui/uni-status-bar/uni-status-bar.vue"
	import {
		mapMutations
	} from 'vuex';
	export default {
		components: {
			uniStatusBar
		},
		data() {
			return {
				username: "",
				nickname: "",
				password: "",
				password2: "",
				check: true,

				// 验证规则
				rules: {
					username: [
						// {
						// 	rule:/^[a-zA-Z]\w{5,17}$/,
						// 	msg:"账号必须字母开头，长度在6~18之间，只能包含字母、数字和下划线"
						// }
					],
					password: [
						// {
						// 	rule:/^.{5,20}$/,
						// 	msg:"密码长度必须为5-20个字符"
						// }
					],
					password2: [
						// {
						// 	rule:/^.{5,20}$/,
						// 	msg:"密码长度必须为5-20个字符"
						// }
					],
					nickname: [
						// {
						// 	rule:/^.{5,20}$/,
						// 	msg:"密码长度必须为5-20个字符"
						// }
					],
				},

				focusClass: {
					username: false,
					password: false,
					password2: false,
					nickname: false,
				},
			}
		},
		methods: {
			...mapMutations(['login']),
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 表单验证
			validate(key) {
				var check = true
				this.rules[key].forEach((v) => {
					// 验证失败
					if (!(v.rule).test(this[key])) {
						uni.showToast({
							title: v.msg,
							icon: 'none'
						});
						check = false
						return false
					}
				})
				return check
			},
			// 提交表单
			submit() {
				// 验证用户名
				if (!this.validate('username')) return;
				// 验证密码
				if (!this.validate('password')) return;

				if (!this.validate('password2')) return;

				if (!this.validate('nickname')) return;

				console.log('提交成功');
				// uni.showLoading({
				// 	title: '登录中...',
				// 	mask: true
				// });
				this.$H.post('/register', {
					username: this.username,
					password: this.password,
					password2: this.password2,
					nickname: this.nickname,
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: '注册成功',
						icon: 'none'
					});
					uni.navigateBack({
						delta: 1
					});
				})
			},
			focus(key) {
				this.focusClass[key] = true
			},
			blur(key) {
				this.focusClass[key] = false
			}
		}
	}
</script>

<style>

</style>
