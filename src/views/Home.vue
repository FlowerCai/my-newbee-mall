<template>
  <div>
    <header class="home-header wrap" :class="{'active': headerScroll}">
    <router-link tag="i" to="/category">
      <i class="iconfont nbiconmenu"></i>
    </router-link>
    </header>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="less" scoped>

  .category-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>