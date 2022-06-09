<template>
  <div class="main-content ">
    <headerNavBar></headerNavBar>
    <!-- <div class="show-contain-top"></div> -->
    <div class="show-contain">
      <FadeTransition :duration="200" mode="out-in">
        <router-view></router-view>
      </FadeTransition>
    </div>
    <footerLeader></footerLeader>
  </div>
</template>

<script>
  import ContentFooter from '../Layout/ContentFooter.vue'
  import footerLeader from '../Layout/footerLeader.vue'
  import headerNavBar from '../Layout/headerNavBar.vue'
  import Content from '../Layout/Content.vue'
  import {
    FadeTransition
  } from 'vue2-transitions'

  export default {
    components: {
      footerLeader,
      headerNavBar,
      Content,
      FadeTransition
    }
  }
</script>

<style lang="scss">
</style>
