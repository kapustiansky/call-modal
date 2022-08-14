import { createStore } from 'vuex';
import modal from './modules/modal.js';
import cities from './modules/cities.js';

const store = createStore({
	modules: {
		modal,
		cities,
	},
});
export default store;
