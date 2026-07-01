import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

//vant组件的引入
import vant from 'vant';
import '../node_modules/vant/lib/index.css';

//路由的引入
import router from './router/index.js'

createApp(App).use(vant).use(router).mount('#app')
