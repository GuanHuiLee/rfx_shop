<template>
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center animated fadeIn faster" style="height: 320rpx;">

			<loading-plus v-if="beforeReady"></loading-plus>


			<!-- 消息列表 -->
			<view @click="navigate('message-list',true)" class="iconfont icon-xiaoxi position-absolute text-white" style="font-size: 50rpx;top: 75rpx;right: 20rpx;z-index: 100;"></view>

			<image src="../../static/images/bg.jpg" style="height: 320rpx;width: 100%;"></image>

			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 50rpx;">

				<image :src="loginStatus&userInfo.avatar!=null ? userInfo.avatar : '/static/images/demo/demo6.jpg'" style="height: 145rpx;width: 145rpx;border: 5rpx solid;"
				 class="rounded-circle border-light ml-4"></image>
				<view class="ml-2 text-white font-md" @click="openLogin">
					{{loginStatus ? userInfo.nickname : '登录/注册'}}
				</view>

				<view class="d-flex a-center j-center a-self-end ml-auto px-2" style="height: 70rpx;background: #FFD43F;color: #CC4A00;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;">
					<view class="line-h iconfont icon-huangguan mr-1"></view>
					{{loginStatus ?userLevel.name+' 减'+userLevel.discount+'%':'普通会员'}}
				</view>
			</view>
		</view>
		<!-- 图标分类 -->
		<card>
			<view slot="title" class="d-flex a-center j-sb w-100">
				<text class="font-md font-weight">我的订单</text>
				<view class="text-secondary font ml-auto" @click="navigate('order',true)">
					全部订单 <text class="iconfont icon-you font"></text>
				</view>
			</view>
			<view class="d-flex a-center">
				<view class="flex-1 d-flex flex-column a-center j-center py-3" hover-class="bg-light-secondary" v-for="(item,index) in orders"
				 :key="index" @click="openOrder(item)">
					<view class="iconfont font-lg line-h" :class="item.icon"></view>
					<view>{{item.name}}</view>
				</view>
			</view>
		</card>

		<divider></divider>

		<uni-list-item showExtraIcon leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" title="泊乐会员" @click="navigate('balances')"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#FCBE2D;" leftIcon="icon-huangguan" title="优惠劵" @click="navigate('order-coupon')"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#FA6C5E;" leftIcon="icon-service" title="预约服务" @click="navigate('service_center')"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#FE8B42;" leftIcon="icon-home" title="维修记录" @click="navigate('msg-list')"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#9ED45A;" leftIcon="icon-dianhua " title="泊乐售后"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#9ED45A;" leftIcon="icon-gengduo" title="泊乐之家"></uni-list-item>
		<divider></divider>
		<uni-list-item showExtraIcon leftIconStyle="color:#808C98;" leftIcon="icon-icon_set_up" title="更多设置" @click="navigate('user-set')"></uni-list-item>

	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"

	import card from "@/components/common/card.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import {
		mapState
	} from 'vuex';
	export default {
		mixins: [loading],
		components: {
			card,
			uniListItem
		},
		data() {
			return {
				orders: [{
					name: "待付款",
					icon: "icon-wallet_icon",
					index: 1
				}, {
					name: "待收货",
					icon: "icon-daishouhuo",
					index: 2
				}, {
					name: "待评价",
					icon: "icon-pinglun",
					index: 3
				}, {
					name: "我的预约",
					icon: "icon-buoumaotubiao46",
					index: 4
				}],
			}
		},
		computed: {
			...mapState({
				loginStatus: state => state.user.loginStatus,
				userInfo: state => state.user.userInfo,
				userLevel: state => state.user.userInfo.userLevel
			})
		},
		methods: {
			navigate(path, check = false) {
				if (!path) return;
				if (check) {
					return this.navigateTo({
						url: `/pages/${path}/${path}`
					})
				}
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				});
			},
			openLogin() {
				if (!this.loginStatus) {
					uni.navigateTo({
						url: '../login/login',
					});
				}
			},
			openOrder(item) {
				if (item.index) {
					if (item.index == 4) {
						this.navigateTo({
							url: "/pages/subscribe/subscribe-list"
						})
					} else {
						this.navigateTo({
							url: "/pages/order/order?tabIndex=" + item.index
						})
					}
				}
			},
		}
	}
</script>

<style>

</style>
