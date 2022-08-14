import { mapGetters, mapActions } from 'vuex';

export default {
	computed: mapGetters('modal', ['modalVisibility', 'selectedCityId']),
	methods: {
		...mapActions('modal', ['changeVisibility', 'selectCity']),

		showModal(event) {
			this.changeVisibility(true);
			this.selectCity(event.target.getAttribute('data-id'));
		},

		closeModal() {
			this.changeVisibility(false);
			this.selectCity(null);
		},
	},
};
