<template>
  <div class="category-box"> 
    我是用户界面
  <nav-bar></nav-bar>

  </div>
</template>

<script>
export default {
  name: 'User',
}
</script>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style lang="less" scoped>
  .category-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>