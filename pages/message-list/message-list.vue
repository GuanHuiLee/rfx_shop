<template>
	<view style="background: #F5F5F5;">
		<template v-if="messageList.length > 0">
			<view class="p-2">
				<view class="mb-2 p-2 bg-white rounded" hover-class="bg-light"
				v-for="(item,index) in messageList" :key="index"
				@click="open(item)">
					<view class="text-dark font-md">{{item.title}}</view>
					<view class="font text-light-muted">
						{{item.content}}
					</view>
					<view class="font text-light-muted">{{item.create_time}}</view>
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
				messageList: [],
				msg:'还没有数据',
				icon:'no_pay'
			}
		},
		onLoad(e) {
			this.getAppointment();
		},
		methods: {
			// 获取消息
			getAppointment() {
				this.$H.get('/message').then(res => {
					this.messageList = res.map(v => {
						return {
							title: v.title,
							content: v.content,
							type:v.type,
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
