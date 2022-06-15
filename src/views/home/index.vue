<template>
  <div>
    <pcIndex v-if="isPcShow"></pcIndex>
    <appContent v-if="isAppShow"></appContent>
  </div>
</template>

<script>
  import pcIndex from './homeContent.vue'
  import appContent from './appContent.vue'
  export default {
    name: 'index',
    components: {
      pcIndex,
      appContent
    },
    data() {
      return {
        isPcShow: false,
        isAppShow: false
      }
    },
    created() {

    },
    mounted() {
      this.getType()
    },
    methods: {
      getType() {
        // var html = document.documentElement;
        // var width = html.getBoundingClientRect().width || window.innerWidth;
        // if (width > 750) {
        //   this.isPcShow = true
        //   this.isAppShow = false
        // } else {
        //   this.isAppShow = true
        //   this.isPcShow = false
        // }
        var type = navigator.userAgent
        var isPc = type.indexOf('Win')
        if (isPc > -1) {
          this.isPcShow = true
          this.isAppShow = false
        } else {
          this.isPcShow = false
          this.isAppShow = true
        }
      }
    }
  }
</script>

<style>
</style>
