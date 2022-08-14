import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Directives from './directives/index.js';
import ModalMixin from './mixins/ModalMixin';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/styles/main.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Directives);
app.use(VueAxios, axios);
app.mixin(ModalMixin);

app.mount('#app');
