<template>
  <div class="slider">
      <!-- v-if 参数表示能够循环从头播放 -->
    <swiper :options="swiperOption" ref="mySwiper" v-if="bannerList.length">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img :src="item.imageUrl" class="slider-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { getBanner } from '../../api/recommend'
import { ERR_OK } from '../../common/js/config'
export default {
  name: 'Slider',
  data() {
    return {
      bannerList: [],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          // 轮播图对应小点的属性
          el: '.swiper-pagination'
        }
      }
    }
  },
  created() {
    this._getBanner()
  },
  methods: {
    _getBanner() {
      getBanner().then(res => {
        // console.log(res)
        if (res.data.code == ERR_OK) {
          // 对轮播图数量进行限制使用列表的slice(int x)方法,x表示被取走的个数
            // this.bannerList = res.data.banners
          this.bannerList = res.data.banners.slice(3)
          //   console.log(res)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable';

.slider-img {
  width: 100%;
}

// 小圆点样式未选中状态
.slider >>> .swiper-pagination-bullet {
  background-color: $color-background;
  opacity: 0.8; // 不透明度
}

// 小圆点样式选中状态
.slider >>> .swiper-pagination-bullet-active {
  background-color: $color-theme;
}
</style>