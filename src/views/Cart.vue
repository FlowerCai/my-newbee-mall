<template>
  <div class="category-box">
    我是购物车
    <NavBar></NavBar>
  </div>
</template>

<script>
export default { 
  name: 'Cart',
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
