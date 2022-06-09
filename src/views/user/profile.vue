<template>
  <div class="icontainer-subpage-v2">
    <!-- <proifleUserinfo></proifleUserinfo> -->
    <userinfo></userinfo>

    <div class="inavigation">
      <div class="inavi-contant">
        <div :class="naviChech=='original'?'navi-item navi-active':'navi-item'" @click="naviSelect('original')">
          {{$t('page.original')}}
        </div>
        <div :class="naviChech=='activity'?'navi-item navi-active':'navi-item'" @click="naviSelect('activity')">
          {{$t('page.bought')}}
        </div>
        <div :class="naviChech=='listings'?'navi-item navi-active':'navi-item'" @click="naviSelect('listings')">
          {{$t('page.sale')}}
        </div>
      </div>
      <div class="inavi-slider">
        <!-- :style="{transform: 'translateX(${sliderlength})'}" ? -->
        <div id="islider" class="islider"></div>
      </div>
    </div>

    <div class="user-business">
      <FadeTransition :duration="300" mode="out-in">
        <router-view></router-view>
      </FadeTransition>
    </div>

  </div>
</template>

<script>
  import {
    FadeTransition,
  } from 'vue2-transitions'
  import userinfo from './userinfov3.vue'
  export default {
    name: 'profile',
    components: {
      FadeTransition,
      userinfo
    },
    data() {
      return {
        key: '1',
        naviChech: 'original',
        sliderlength: 0,
      }
    },
    created() {

      /* execute it when you refresh the page */
      this.$router.push({
        name: 'original',
        param: {
          type: 'original',
          serial: (new Date).getTime()
        }
      })

    },
    methods: {
      naviSelect(v) {
        var slider = document.getElementById('islider')
        this.naviChech = v;
        if (v == 'original') {
          this.sliderlength = 0
          this.$router.push({
            name: 'original',
            param: {
              type: 'original'
            }
          })
        } else if (v == 'activity') {
          this.sliderlength = 22.2222
          this.$router.push({
            name: 'activity'
          })
        } else if (v == 'listings') {
          this.sliderlength = 44.4444
          this.$router.push({
            name: 'listings'
          })
        }
        slider.style.transform = 'translateX(' + this.sliderlength + 'rem)'
      }
    },
  }
</script>

<style scoped>
  @import url("../../assets/scss/com.css");
  @import url("../../assets/scss/profile.css");
</style>
