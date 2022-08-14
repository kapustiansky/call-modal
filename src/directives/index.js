import mask from './mask';

const directives = {
	mask,
};

export default {
	install(app) {
		Object.keys(directives).forEach((key) => {
			app.directive(key, directives[key]);
		});
	},
};
