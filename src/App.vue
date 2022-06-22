<template>
  <!-- <div class="b-container"> -->
  <div class="main-content">
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
    mounted() {
      this.initScrollbar()
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    }
  }
</script>
<style>
  @import url("assets/scss/com.css");

  .main-content {
    /* max-width: var(--max-width); */
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .show-contain {
    position: relative;
    max-width: --max-width;
    margin: 4.5555rem auto 0 auto;
    min-height: calc(100vh - 10rem);
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    .show-contain {
      position: relative;
      margin: 3.5rem auto 0 auto;
    }
  }

  :root {
    --max-width: 1920px;
  }
</style>
