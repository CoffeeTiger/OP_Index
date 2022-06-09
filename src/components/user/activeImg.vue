<template>
  <div>
    <div class="iprofileimg-contain" :class="waiting==1&&winner==0?'iovertime':''" @click="tradePage">
      <div class="iprofileimg">
        <img :src="require('../../assets/imgs/nfts/' + pid)" class="ip-img"/>
      </div>
      <ul class="ip-content">
        <li class="ip-name color_yellow">{{pname}}</li>
        <!-- <li class="ip-value">{{$t('page.blockChain')}} : <span class="ivalue">Ethereum</span></li> -->
        <li class="ip-value">{{pvalue}}</li>
      </ul>

      <!-- <div class="ip-status">
        <div class="ip-status-left">
          <div class="istatus-Waiting" v-if="waiting==0">{{$t('page.waiting')}}</div>
          <div class="istatus-Winner" v-if="winner==1">{{$t('page.winner')}}</div>
        </div>
        <div class="ip-status-right">
          <b-button variant="primary" v-if="winner==1&&receive==0">{{$t('page.receive')}}</b-button>
          <b-button disabled v-if="winner==1&&receive==1">{{$t('page.received')}}</b-button>
          <div class="istatus-timer" v-if="waiting==0">
            <div class="itimer-cell">{{timer.split(':')[0]}}</div>:
            <div class="itimer-cell">{{timer.split(':')[1]}}</div>:
            <div class="itimer-cell">{{timer.split(':')[2]}}</div>
          </div>
        </div>
      </div> -->

      <div class="istatus">
        <div class="istatus-imgs" v-if="waiting!=0">
          <img src="../../assets/imgs/lucker.png" class="lucker-img"  v-if="winner==1"/>
          <img src="../../assets/imgs/rewarded.png" class="rewarded-img"  v-if="winner==2"/>
        </div>
        <div class="itimes" v-if="waiting==0">
          <div class="itimer-cell color_black">{{timer.split(':')[0]}}</div>
          <img src="../../assets/imgs/dots.svg" class="itimer-dots"/>
          <div class="itimer-cell color_black">{{timer.split(':')[1]}}</div>
          <img src="../../assets/imgs/dots.svg" class="itimer-dots"/>
          <div class="itimer-cell color_black">{{timer.split(':')[2]}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    props: {
      pid: {
        type: String,
        default: ''
      },
      pname:{
        type:String,
        default:'CrpyAPI-20220120-8851'
      },
      pvalue:{
        type:String,
        default:'#8372 #2923'
      },
      waiting:{
        type:String,
        default:'0'
      },
      receive:{
        type:String,
        default:'1'
      },
      winner:{
        type:String,
        default:'1'
      },
      timer:{
        type:String,
        default:'00:01:01'
      }
    },methods: {
      tradePage() {
       this.$router.push({path:'/carouselTrade', params:{id: this.pid}})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  /* v2 */
  @import url("../../assets/scss/profile.css");


  /* v1 */
  .iprofileimg-contain .ip-status{
    width: -webkit-calc(100% - 1.2rem);
    margin: 0.6rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .iprofileimg-contain .ip-status .istatus-Waiting{
    border: 0.12rem solid #737dd4;
    padding: 0.16rem 0.4rem;
    border-radius: 0.32rem;
    color: #737dd4;
  }
  .iprofileimg-contain .ip-status .istatus-Winner{
    border: 0.12rem solid #a923b8;
    padding: 0.16rem 0.4rem;
    border-radius: 0.32rem;
    color: #a923b8;
  }
  .iprofileimg-contain .ip-status .ip-status-right{
    font-size: 1.2rem;
  }
  .iprofileimg-contain .ip-status .ip-status-right .istatus-timer{
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .istatus-timer .itimer-cell{
    border: 0.12rem solid #c8c6c7;
    padding: 0.2rem 0.4rem;
    border-radius: 0.32rem;
    margin: 0 0.2rem;
  }
  .istatus-timer .itimer-cell:hover{
    background-color: #c8c6c7;
    color: #FFF;
  }
</style>
