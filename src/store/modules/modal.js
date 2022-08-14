const modal = {
	namespaced: true,
	state: {
		modal: false,
		selectedId: null,
	},
	getters: {
		modalVisibility(state) {
			return state.modal;
		},

		selectedCityId(state) {
			return state.selectedId;
		},
	},
	mutations: {
		changeVisibility(state, value) {
			state.modal = value;
		},

		selectCity(state, id) {
			state.selectedId = id;
		},
	},
	actions: {
		changeVisibility({ commit }, value) {
			commit('changeVisibility', value);
		},

		selectCity({ commit }, id) {
			commit('selectCity', id);
		},
	},
};

export default modal;
