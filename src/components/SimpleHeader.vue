<template>
  <header class="simple-header van-hairline--bottom">
    <i v-if="!isback" class="iconfont nbiconfanhui" @click="goBack"></i>
    <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
    <div class="simple-header-name">{{ name }}</div>
    <i class="iconfont nbicongengduo"></i>
  </header>
  <div class="block" />

</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
// 作为子组件接受父组件传下来的参数 name back noback
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  back: {
    type: String,
    default: '',
  },
  noback: {
    type: Boolean,
    default: false,
  }
})

const isback = ref(props.noback)
// 接受子组件的参数
const emit = defineEmits(['callback'])
const goBack = () => {
  if(!props.back){
    router.go(-1)
  } else {
    router.push({ path: props.back})
  }
  emit('callback')
}


</script>

<script>
export default {
  name: 'SimpleHeader',
}
</script>

<style lang="less" scoped>

@import '../common/style/mixin';
  .simple-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    .fj();
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    color: #252525;
    background: #fff;
    .simple-header-name {
      font-size: 14px;
    }
  }
  .block {
    height: 44px;
  }

</style>