import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import { Toast } from 'vue-toastification';
import 'vue-toastification/dist/index.css'

const app = createApp(App);
app.use(router)
app.use(Toast)
app.use(store)
app.mount('#app')
