<template>
  <div class="tab">
    <router-link tag="div" class="item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="item" to="/singer">
      <span>歌手</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable.styl';

.tab {
  display: flex;
  height: 44px;
  line-height: 44px;

  .item {
    flex: 1;
    text-align: center;
    background-color: $color-theme;
    color: #ffffff;
    font-size: $font-size-medium;
  }

  .router-link-active {
    span {
      font-weight: bold;
      border-bottom: 2px solid #ffffff;
      padding: 5px;
    }
  }
}
</style>