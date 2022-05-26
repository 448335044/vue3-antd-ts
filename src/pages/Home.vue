<template>
  <div class="hello">
    欢迎 {{name}}
    开启v3+antd
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useStore} from 'vuex';
import homeStore from './homeStore'
import store from '../store-new'
store.registerModule('registerModule', homeStore)

export default defineComponent({
  name: 'home',
  props: {
    msg: String,
  },
  setup () {
    console.log("store11", store)
    // const store = useStore();
    // console.log('vuex', store.state.user.name);
    // let name = store.state.user.name; // 这里注意指定user模块
    // return {
    //   name
    // }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>