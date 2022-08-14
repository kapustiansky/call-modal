<script>
export default {
	name: 'SelectWithContainer',
	props: [
		'name',
		'form',
		'required',
		'label',
		'options',
		'selected',
		'containerClazz',
		'modelValue',
	],
};
</script>

<template>
	<div class="flex flex-col-reverse" :class="containerClazz">
		<select
			v-if="name === 'city_id'"
			:name="name"
			:form="form"
			:required="!!required"
			class="input appearance-none select-arrow call-select"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		>
			<option
				v-for="(option, index) in options"
				:key="index"
				:value="option.id"
			>
				{{ option.name }}
			</option>
		</select>
		<label :for="name" class="text-gray-700 font-medium text-base">{{
			label
		}}</label>
	</div>
</template>
