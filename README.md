

# 安装antd
1.npm i --save ant-design-vue@next
全局导入：
2.在main.ts文件中挂载，使用

按需导入：
2.安装babel插件 
npm install babel-plugin-import --save-dev
3.新建plugins/Ant/index.ts文件, 在里面按需引用需要加载的组件
4.修改bable.config.ts
5.在main.ts文件中重新修改，引入plugins/Ant下的文件


# 安装router
1.npm install vue-router@4
2.在router/index.ts文件导入
import { createRouter,createWebHashHistory} from "vue-router";

使用
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
3.在main.ts挂载
4.页面使用
import { useRouter } from 'vue-router'
setup () {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        path: 'home'
      })
    })
    return {
      toHome
    }
  },

# 安装vuex
1.npm install vuex@next --save
2.在store/index.ts文件导入
import { createStore } from 'vuex'
使用并暴漏
export default createStore({
  getters,
  modules
})
3.在main.ts挂载
4.页面使用
import {useStore} from 'vuex';
setup () {
    const store = useStore();
    console.log('vuex', store.state.user.name);
    let name = store.state.user.name; // 这里注意指定user模块
    return {
      name
    }
  },


分模块时：
每个模块中需要加上namespaced：true，模块才生效， commit('test/addNum', 111)
否则当作普通使用







