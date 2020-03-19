<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <Slider />
      </div>
      <div class="recommend-list">
        <h1 class="recommend-title">推荐歌单</h1>
        <ul>
          <li class="item" v-for="item of recommendList" :key="item.id">
            <div class="icon">
              <img :src="item.picUrl" />
            </div>
            <p class="clicks">
              <i class="iconfont icon-search"></i>
              {{ Math.floor(item.playCount/10000) }}万
            </p>
            <div class="song-name">
              <p>{{ item.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/base/slider/slider'
import { getRecommendList } from '@/api/recommend'
import { ERR_OK } from '../../common/js/config'
export default {
  name: 'Recommend',
  data() {
    return {
      // 声明歌单为空数组
      recommendList: []
    }
  },
  components: {
    Slider
  },
  // 生命周期函数决定什么时候执行
  created() {
    this._getRecommendList()
  },
  methods: {
    _getRecommendList() {
      getRecommendList().then(res => {
        if (res.data.code == ERR_OK) {
          this.recommendList = res.data.result.slice(0,9)
          // console.log(res)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
// 导入样式
@import '~@/common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  z-index: 100;

  .recommend-content {
    width: 100%;
    height: 100%;

    .slider-wrapper {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }

    .recommend-list {
      box-sizing: border-box;
      width: 100%;

      .recommend-title {
        height: 60px;
        line-height: 60px;
        font-size: $font-size-medium;
        font-weight: bold;
        color: $color-text;
        padding-left: 1.5%;
      }

      .item {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 33%;
        padding: 1%;

        .icon {
          display: inline-block;

          img {
            width: 100%;
            height: 100%;
            border-radius: 5%;
          }
        }

        .clicks {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: $font-size-small-s;
          color: $color-text-l;
        }

        .song-name {
          height: 40px;
          line-height: 16px;
          font-size: $font-size-small;
          float: left;
          overflow: hidden;
        }
      }
    }
  }
}
</style>