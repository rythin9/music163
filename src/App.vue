<template>
  <div id="app">
    <MusicHeader />
    <Tab />
    <router-view></router-view>
  </div>
</template>

<script>
import MusicHeader from '@/components/music-header/MusicHeader.vue'
import Tab from '@/components/tab/Tab.vue'
export default {
  name: 'App',
  components: {
    MusicHeader,
    Tab
  }
}
</script>

<style>
</style>
