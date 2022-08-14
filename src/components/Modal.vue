<script>
import { mapGetters } from 'vuex';
import CallForm from '@/components/CallForm.vue';

export default {
	components: {
		CallForm,
	},
	computed: { ...mapGetters('modal', ['modalVisibility']) },
	methods: {
		onClickAway(event) {
			if (event.currentTarget === event.target) this.closeModal();
		},
	},
};
</script>

<template>
	<div
		class="fixed top-0 left-0 w-full h-full z-40 bg-transparent flex justify-center items-center opacity-0 scale-0"
		:class="{
			'opacity-100 scale-100': modalVisibility === true,
		}"
		@click="onClickAway"
	>
		<div
			class="w-full max-w-355 sm:max-w-669 md:max-w-793 rounded-lg bg-white p-6 shadow-modal"
		>
			<p class="text-gray-900 font-medium text-2xl pb-9 sm:pb-7 md:pb-6">
				Заказать звонок
			</p>
			<CallForm />
		</div>
	</div>
</template>
