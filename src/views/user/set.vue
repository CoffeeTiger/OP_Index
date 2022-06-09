<template>
  <div class="icontainer-subpage-v2">
    <div class="iset">
      <div class="iset-index bg_darkgray">
        <div class="iset-leader-contain">
          <div class="iset-leader-title bg_lightgray">{{$t('page.settings')}}</div>
          <div class="iset-leader-lists">

            <div class="ileader bg_yellow color_black" :class="setactive==1?activeclass:''" @click="show(1)">
              <b-icon icon="person-bounding-box" class="ileader-img"></b-icon>
              <span class="ileader-name">{{$t('page.profile')}}</span>
            </div>
            <!-- <div class="ileader" :class="setactive==2?activeclass:''" @click="show(2)">
              <b-icon icon="globe2" class="ileader-img"></b-icon>
              <span class="ileader-name">{{$t('page.language')}}</span>
            </div> -->
            <!-- <div class="ileader bg_yellow color_black" :class="setactive==4?activeclass:''" disabled>
              <b-icon icon="question-square" class="ileader-img"></b-icon>
              <span class="ileader-name">Profile</span>
            </div> -->

          </div>
        </div>
      </div>
      <div class="iset-config bg_lightgray">
        <div class="iset-contect-contain">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'set',
    data() {
      return {
        setactive: 1,
        activeclass:'ileader-active'
      }
    },methods: {
      show(v) {
        this.setactive = v
        if (v == 1) {
          this.$router.push({name:'setProfile'})
        } else if(v == 2){
          this.$router.push({name:'setLang'})
        }
      }
    },
  }
</script>

<style scoped="scoped">
  .iset{
    width: 100%;
    margin: 3.4444rem auto;
    display: flex;
    justify-content: space-between;
  }
  .iset .iset-index{
    width: 22.2222rem;
    min-height: 20rem;
    padding: 0 0 4.4444rem;
    border-radius: 0.8888rem;
  }
  .iset .iset-config{
    width: 43.0555rem;
    padding: 1.3333rem;
  }

  .iset-leader-contain{
    width: 100%;
  }
  .iset-contect-contain{
    width: 100%;
    /* height: 100vh; */
  }
  .iset-leader-contain .iset-leader-title{
    width: 100%;
    padding: 0 1.3333rem;
    font-size: 1.3333rem;
    line-height: 4.8rem;
    font-weight: 500;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .iset-leader-contain .iset-leader-lists{
    width: 100%;
    padding: 0 1.3333rem;
  }
  .iset-leader-contain .iset-leader-lists .ileader{
    width: 100%;
    margin: 1rem 0;
    line-height: 3.2rem;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .iset-leader-contain .iset-leader-lists .ileader:hover{
    opacity: 0.6;
    transition: all .3s;
  }
  .iset-leader-contain .iset-leader-lists .ileader .ileader-name{
    padding-right: 1.3333rem;
  }
  .iset-leader-contain .iset-leader-lists .ileader .ileader-name::after{
    content: '>';opacity: 0.6;
    margin-left: 0.3333rem;
  }
  .iset-leader-contain .iset-leader-lists .ileader-active{
    animation: .25s, 100ms;
  }
  .iset-leader-contain .iset-leader-lists .ileader .ileader-img{
    margin: 0 1rem;
  }

</style>
