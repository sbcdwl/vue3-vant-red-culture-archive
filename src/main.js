import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'

//vant组件的引入
import vant from 'vant'
import '../node_modules/vant/lib/index.css'

//路由的引入
import router from './router/index.js'

//数据引入
import { initCollectionData } from './data/Collection.js'
import { initNewsData } from './data/News.js'
import { initTourData } from './data/Tour.js'

//初始化数据
initCollectionData()
initNewsData()
initTourData()

const app = createApp(App)
app.use(vant)
app.use(router)
app.mount('#app')
