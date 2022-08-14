<script>
import ButtonCustom from '@/components/ui/ButtonCustom.vue';
import InputWithContainer from '@/components/ui/InputWithContainer.vue';
import SelectWithContainer from '@/components/ui/SelectWithContainer.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'CallForm',
	components: {
		InputWithContainer,
		ButtonCustom,
		SelectWithContainer,
	},
	data() {
		return {
			name: '',
			phone: '',
			email: '',
			city_id: '',
			target: null,
			error: null,
			phoneError: false,
			success: null,
		};
	},
	computed: {
		...mapGetters('cities', ['getCities']),
		...mapGetters('modal', ['modalVisibility', 'selectedCityId']),
	},
	methods: {
		async submitCall(event) {
			try {
				const target = event.target;
				this.target = target;
				const phone = this.target[1].value;

				if (phone.includes('_')) {
					this.target[1].setCustomValidity('Заполните это поле.');
					this.target.reportValidity();
					this.phoneError = true;
					return;
				}

				const formatPhone = phone
					.replace('(', '')
					.replace(')', '')
					.replaceAll('-', '')
					.replaceAll(' ', '');
				const res = await this.axios.post(
					'http://hh.autodrive-agency.ru/test-tasks/front/task-7/',
					{
						name: this.name,
						phone: formatPhone,
						email: this.email,
						city_id: this.city_id,
					}
				);

				if (res.status === 200) this.success = res.data;
			} catch (err) {
				if (err.response?.status === 400) {
					this.error = err.response.data;
				}
				console.error(err);
			}
		},
	},
	watch: {
		name() {
			if (this.error) this.error = null;
		},
		phone() {
			if (this.error) this.error = null;
			if (this.phoneError) {
				this.target[1].setCustomValidity('');
				this.target.reportValidity();
				this.phoneError = false;
			}
		},
		email() {
			if (this.error) this.error = null;
		},
		city_id() {
			if (this.error) this.error = null;
		},
		selectedCityId() {
			this.city_id = this.selectedCityId;
		},
		modalVisibility() {
			if (!this.modalVisibility && this.success) {
				this.name = '';
				this.phone = '';
				this.email = '';
				this.success = null;
				this.target = null;
			}
		},
	},
};
</script>

<template>
	<div v-if="success" v-html="success"></div>
	<form
		v-else
		class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-x-6 sm:gap-y-5 md:gap-5"
		name="call-form"
		id="call-form"
		@submit.prevent="submitCall($event)"
	>
		<InputWithContainer
			:type="'text'"
			:placeholder="'Иван Иванов'"
			:name="'name'"
			:label="'Имя*'"
			:form="'call-form'"
			:required="true"
			v-model="name"
		/>
		<InputWithContainer
			:type="'tel'"
			:name="'phone'"
			:label="'Телефон*'"
			:form="'call-form'"
			:required="true"
			:mask="'+7 (___) ___-__-__'"
			:placeholder="'+7 (___) ___-__-__'"
			v-model="phone"
		/>
		<InputWithContainer
			:type="'email'"
			:placeholder="'you@example.com'"
			:name="'email'"
			:label="'Email*'"
			:form="'call-form'"
			:required="true"
			v-model="email"
		/>
		<SelectWithContainer
			:name="'city_id'"
			:label="'Город*'"
			:form="'call-form'"
			:required="true"
			:options="this.getCities"
			v-model="city_id"
			:containerClazz="'sm:col-start-1 sm:col-end-3 md:col-auto'"
		/>
		<ButtonCustom
			:type="'submit'"
			:text="'Отправить'"
			:clazz="'bg-green-600 w-full mt-auto h-max sm:col-start-3 sm:col-end-3 md:col-start-4 md:col-end-4'"
			:form="'call-form'"
		/>
	</form>
	<div v-if="error" v-html="error" class="text-red-500"></div>
</template>
