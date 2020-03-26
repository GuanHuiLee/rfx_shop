<template>
	<view>
		<view class="p-2" style="padding-top: 300upx;">
			<view class="d-flex a-center j-center">
				<image src="../../static/images/car/keyongyue.png" mode="widthFix" style="width: 100upx;height: 100upx;margin-top: 20upx;"></image>
			</view>
			<text class="d-flex a-center j-center" style="">我的余额</text>

			<view class="d-flex a-center j-center">
				<text style="font-size: 50upx;color: #FF787E;">￥800.00</text>
			</view>
			<view class="p-3" style="padding-top: 400upx;">
				<button type="default" class="bg-white" style="background-color: #0BBE60 !important;color: #FFFFFF;width: 400upx;"
				 @click="navigate('balances-methods')">充值</button>
				<button type="default" class="bg-white mt-3" style="color: #0bbe60;width: 400upx;">提现</button>
			</view>
			<view class="position-fixed left-0 right-0 bottom-0">
				<text style="color: #C0C0C0;" class="d-flex a-center j-center">本服务由瑞芙信广告有限公司技术支持</text>
			</view>
		</view>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	export default {
		components: {
			price
		},
		data() {
			return {

			}
		},
		methods: {
			navigate(path) {
				if (!path) return;
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				});
			}
		}
	}
</script>

<style>

</style>
