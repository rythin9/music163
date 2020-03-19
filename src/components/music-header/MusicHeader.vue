<template>
  <div class="music-header">
    <h1 class="title">网易云音乐</h1>
    <div class="search">
      <i class="iconfont icon-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable.styl';

.music-header {
  height: 44px;
  width: 100%;
  position: relative;
  background-color: $color-theme;

  .title {
    color: #ffffff;
    text-align: center;
    line-height: 44px;
  }

  .search {
    position: absolute;
    top: 30%;
    right: 15px;

    .iconfont {
      font-size: 22px;
      color: $color-theme-l;
    }
  }
}
</style>