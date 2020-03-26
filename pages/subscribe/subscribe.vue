<template>
	<view>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				姓名：</view>
			<input class="px-1 font-md flex-1" type="text" v-model="form.name" />
		</view>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				联系方式：</view>
			<input class="px-1 font-md flex-1" type="text" v-model="form.phone" />
		</view>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				车牌号：</view>
			<input class="px-1 font-md flex-1" type="text" v-model="form.car_number" />
		</view>

		<divider></divider>

		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				项目：</view>
			<view class="uni-list-cell-db">
				<picker @change="bindProjectChange" :value="index" :range="projectArray">
					<view class="uni-input">{{projectArray[index]}}</view>
				</picker>
			</view>
		</view>

		<divider></divider>


		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2" hover-class="main-bg-hover-color"
			 @click="submit">
				提 交 预 约
			</view>
		</view>

	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue"
	import {
		mapActions
	} from "vuex"
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				isedit: false,
				themeColor: '#007AFF',
				pickerValue: [0, 0, 1],
				index: 0,
				form: {
					name: '',
					phone: '',
					car_number: '',
					project_id: '' 
				},
				projectArray: [],
				projectList: [],
			}
		},
		onLoad(e) {
			if (e.index) {
				console.log(e.index);
				this.index=e.index;
			}
			this.getProject();
		},
		methods: {
			...mapActions(['updatePathAction', 'createPathAction']),
			// 提交
			submit() {
				// 验证表单

				// 修改
				if (this.isedit) {
					this.$H.post('/appointment', this.form, {
						token: true
					}).then(res => {
						this.updatePathAction({
							index: this.index,
							item: this.form
						})
						uni.showToast({
							title: '修改成功'
						});
						uni.navigateBack({
							delta: 1
						})
						uni.$emit('updateUserPathList')
					})

					return;
				}

				this.$H.post('/appointment', this.form, {
					token: true
				}).then(res => {
					// 创建成功
					this.createPathAction(this.form)
					uni.showToast({
						title: '创建成功'
					});
					uni.navigateBack({
						delta: 1
					});
				})

			},

			// 获取预约项目
			getProject() {
				this.$H.get('/project').then(res => {
					this.projectList = res.map(v => {
						return {
							id: v.id,
							name: v.name,
						}
					});

					this.projectArray = res.map(v => {
						return v.name;
					});

					//默认第一条
					this.form.project_id = this.projectList[this.index].id;
				})
			},

			bindProjectChange: function(e) {
				this.index = e.target.value;
				this.form.project_id = this.projectList[this.index].id;
			},

		}
	}
</script>

<style>
	page {
		background: #EEEEEE;
	}
</style>
