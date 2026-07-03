import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'

//vant组件的引入
import vant from 'vant';
import '../node_modules/vant/lib/index.css';

//路由的引入
import router from './router/index.js'
import { initCollectionData } from './data/Collection.js';

//初始化藏品数据
initCollectionData()

const app = createApp(App)
app.use(vant)
app.use(router)
app.mount('#app')
