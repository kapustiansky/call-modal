<script>
export default {
	name: 'ButtonCustom',
	props: ['dataId', 'type', 'form', 'clazz', 'text'],
};
</script>

<template>
	<button
		:data-id="dataId"
		:type="type"
		:form="form"
		:class="`button ${clazz}`"
	>
		{{ text }}
	</button>
</template>
