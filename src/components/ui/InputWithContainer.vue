<script>
export default {
	name: 'InputWithContainer',
	props: [
		'type',
		'name',
		'form',
		'required',
		'label',
		'mask',
		'placeholder',
		'modelValue',
	],
};
</script>

<template>
	<div class="flex flex-col-reverse">
		<input
			:type="type"
			:placeholder="placeholder"
			:name="name"
			:form="form"
			:required="!!required"
			v-mask="mask"
			class="input"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<label :for="name" class="text-gray-700 font-medium text-base">{{
			label
		}}</label>
	</div>
</template>
