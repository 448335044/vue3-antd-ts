<template>
  <div class="hello">
    <div>login</div>
    <a-button type="primary" @click="toHome">Home</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useRoute, useRouter } from 'vue-router'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'login',
  props: {
    msg: String,
  },
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

