<template>
  <div class="nav-bar van-hairline-top">
    <ul class="nav-list">
      <router-link class="nav-list-item active" to="/home">
        <i class="iconfont nbiconshouye"></i>
        <span>首页</span>
      </router-link>

      <router-link class="nav-list-item active" to="/category">
        <i class="iconfont nbiconfenlei"></i>
        <span>分类</span>
      </router-link>

      <router-link class="nav-list-item active" to="/cart">
        <i class="iconfont nbicongouwuchekong"></i>
        <span>购物车</span>
      </router-link>

      <router-link class="nav-list-item active" to="/user">
        <i class="iconfont nbiconwode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<script setup>

</script>

<style lang="less" scoped>


    @import '../common/style/mixin';
    .nav-bar {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 5px 0;
      z-index: 1000;
      background: #fff;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      .nav-list {
        width: 100%;
        .fj();
        flex-direction: row;
        padding: 0;
        .nav-list-item {
          display: flex;
          flex: 1;
          flex-direction: column;
          text-align: center;
          color: #666;
          &.router-link-active {
            color: @primary;
          }
          i {
            text-align: center;
            font-size: 22px;
            // font-size: 82px;
          }
          span{
            font-size: 12px;
          }
          .van-icon-shopping-cart-o {
            margin: 0 auto;
            margin-bottom: 2px;
          }
        }
      }
    }

    
</style>