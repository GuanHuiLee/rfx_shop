<template>
	<view style="background: #F5F5F5;">
		<template v-if="appointmentList.length > 0">
			<view class="bg-white" v-for="(item,index) in appointmentList" :key="index">
				<divider></divider>

				<!-- 头部 -->
				<view class="d-flex a-center p-2 border-bottom border-light-secondary">
					<text class="text-light-muted font-md">{{item.create_time}}</text>
					<text class="main-text-color ml-auto font-md">{{item.state==0?'未完成':'已完成'}}</text>
				</view>

				<!-- 身体 -->
				<view class="px-2">
					<view class="border-bottom d-flex a-center py-2 border-light-secondary">
						<view class="flex-1">
							<view class="d-flex a-center">
								<text class="font-md text-dark">{{item.project}}</text>
								<text class="font-md text-light-muted ml-auto">{{item.name}}</text>
							</view>
							<view class="d-flex a-center">
								<text class="font text-light-muted">{{item.car_number}}</text>
								<text class="font text-light-muted ml-auto">{{item.phone}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
		<!-- 默认无 -->
		<template v-else>
			<no-thing :icon="icon" :msg="msg"></no-thing>
		</template>
	</view>
</template>
<script>
	import noThing from "@/components/common/no-thing.vue"
	export default {
		components: {
			noThing,
		},
		data() {
			return {
				appointmentList: [],
				msg:'还没有预约信息',
				icon:'no_pay'
			}
		},
		onLoad(e) {
			this.getAppointment();
		},
		methods: {
			// 获取预约
			getAppointment() {
				this.$H.get('/appointment').then(res => {
					this.appointmentList = res.map(v => {
						return {
							name: v.name,
							phone: v.phone,
							state: v.state,
							car_number: v.car_number,
							project: v.project.name,
							create_time: v.create_time
						}
					});
				})

				this.refushShow = true;
			},

		}
	}
</script>

<style>
	page {
		background: #EEEEEE;
	}
</style>
