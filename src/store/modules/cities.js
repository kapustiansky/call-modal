const cities = {
	namespaced: true,
	state: {
		cities: [
			{
				id: 1,
				name: 'Москва',
			},
			{
				id: 2,
				name: 'Санкт-Петербург',
			},
			{
				id: 3,
				name: 'Казань',
			},
		],
	},
	getters: {
		getCities(state) {
			return state.cities;
		},
	},
};

export default cities;
