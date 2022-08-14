<script>
import ButtonCustom from '@/components/ui/ButtonCustom.vue';

export default {
	name: 'Home',
	components: {
		ButtonCustom,
	},
};
</script>

<template>
	<section class="custom-container m-auto">
		<div
			class="grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(0,_max-content))] gap-2.5 sm:gap-5 pt-2.5 sm:pt-5"
		>
			<ButtonCustom
				:type="'button'"
				:text="'Заказать в Москву'"
				:dataId="1"
				:clazz="'bg-blue-500'"
				@click="this.showModal($event)"
			/>
			<ButtonCustom
				:type="'button'"
				:text="'Заказать в Санкт-Петербург'"
				:dataId="2"
				:clazz="'bg-teal-600'"
				@click="this.showModal($event)"
			/>
		</div>
	</section>
</template>
