<template>
  <!-- <div class="b-container"> -->
  <div class="main-content ">
    <headerNavBar></headerNavBar>
    <div class="show-contain">
      <FadeTransition :duration="200" mode="out-in">
        <router-view></router-view>
      </FadeTransition>
    </div>
    <footerLeader></footerLeader>
  </div>
</template>

<script>
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import ContentFooter from './views/Layout/ContentFooter.vue'
  import footerLeader from './views/Layout/footerLeader.vue'
  import headerNavBar from './views/Layout/headerNavBar.vue'
  import Content from './views/Layout/Content.vue'

  import {
    FadeTransition
  } from 'vue2-transitions'

  export default {
    name: 'openpublish',
    components: {
      footerLeader,
      headerNavBar,
      Content,
      FadeTransition
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  }
</script>
<style>
  @import url("assets/scss/com.css");

  :root {
    --max-width: 1920px;
  }
</style>
