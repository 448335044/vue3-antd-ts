import { createApp } from 'vue'
import App from './App.vue'
// 全局导入antd-ui
// import Antd from 'ant-design-vue';
// 按需导入
import Antd from './plugins/Ant'

// 导入router
import router from './router'


import 'ant-design-vue/dist/antd.css';

createApp(App)
.use(Antd)
.use(router)
.mount('#app')
