

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








