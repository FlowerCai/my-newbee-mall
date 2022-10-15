<template>
  <div class="category-box">
    我是分类页
  <NavBar></NavBar>
  </div>
</template>


<script>
console.log('yes')
export default {
  name: 'Category',
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

