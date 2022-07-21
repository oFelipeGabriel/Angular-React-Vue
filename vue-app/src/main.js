import { createApp } from 'vue'
import router from './router/router.js'
import App from './App.vue'

import PrimeVue from "primevue/config";

import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router).use(PrimeVue)

app.mount('#app')
