<template>
  <div>
    <SimpleHeader :name="'详情'"></SimpleHeader>
  </div>
  <!-- <div>
    <VueImageVerify></VueImageVerify>
  </div> -->
<div>
  <Login></Login>
  
</div>
</template>

<script>
// export default {
// }</script>
<script setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import VueImageVerify from '@/components/VueImageVerify.vue'
import Login from '@/views/Login.vue'
</script>

<style lang="scss" scoped>

</style>
