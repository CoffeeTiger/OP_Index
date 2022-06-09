<template>
  <div>
    <div class="iprofileimg-contain" @click="tradePage">
      <div class="iprofileimg">
        <img :src="require('../../assets/imgs/nfts/' + pid)" class="ip-img" />
      </div>
      <ul class="ip-content">
        <li class="ip-name color_yellow" :class="waiting==0?'iovertime':''">{{pname}}</li>
        <li class="ip-value">{{$t('page.blockChain')}} : <span class="ivalue">Ethereum</span></li>
        <!-- <li class="ip-value ip-value-v1">Price : <img src="../../assets/imgs/eth.png" class="ieth_logo_v1" /><div class="ivalue">100</div></li> -->
        <!-- <li class="ip-value istatus-progress">
          <b-progress variant="primary" show-progress animated height="1rem">
            <b-progress-bar :value="progress">
              <span> <strong>{{sold}}/{{total}}</strong></span>
            </b-progress-bar>
          </b-progress>
        </li>
        <li class="ip-value ip-value-v2">
          <div class="ip-value-v1">{{$t('page.price')}} : <img src="../../assets/imgs/eth.png" class="ieth_logo_v1" /><div class="ivalue">{{price}}</div></div>
          <div class="istatus-timer">
            <div class="itimer-cell">{{timer.split(':')[0]}}</div>:
            <div class="itimer-cell">{{timer.split(':')[1]}}</div>:
            <div class="itimer-cell">{{timer.split(':')[2]}}</div>
          </div>
        </li> -->
      </ul>

      <div class="istatus">
        <div class="itimes">
          <div class="itimer-cell color_black">{{timer.split(':')[0]}}</div>
          <img src="../../assets/imgs/dots.svg" class="itimer-dots" />
          <div class="itimer-cell color_black">{{timer.split(':')[1]}}</div>
          <img src="../../assets/imgs/dots.svg" class="itimer-dots" />
          <div class="itimer-cell color_black">{{timer.split(':')[2]}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pid: {
        type: String,
        default: ''
      },
      pname: {
        type: String,
        default: 'CrpyAPI-20220120-8851'
      },
      progress: {
        type: String,
        default: '20'
      },
      total: {
        type: String,
        default: '100'
      },
      sold: {
        type: String,
        default: '100'
      },
      price: {
        type: String,
        default: '1'
      },
      waiting: {
        type: String,
        default: '0'
      },
      timer: {
        type: String,
        default: '00:01:01'
      }
    },
    methods: {
      tradePage() {
        this.$router.push({
          path: '/carouselTrade',
          params: {
            id: this.pid
          }
        })
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  @import url("../../assets/scss/profile.css");

  /* .iprofileimg-contain{
    width: 100%;
    max-width: 320px;
    margin: 0.64rem auto;
    border: 1px solid #f0f0f0;
    border-radius: 0.64rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain:hover{
    filter: brightness(0.96);
  }
  .iprofileimg{
    width: 100%;
    max-width: 320px;
    height: 362px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfdfd;
  }
  .iprofileimg-contain .ip-img{
    width: 100%;
    height: auto;
    max-width: 320px;
    max-height: 360px;
  }
  .iprofileimg-contain .ip-content{
    width: -webkit-calc(100% - 1.2rem);
    margin: 0.6rem auto;
    line-height: 1.6rem;
    color: #787676;
  }
  .iprofileimg-contain .ip-content .ip-name{
    width: 100%;
    margin: 0.8rem auto;
    font-weight: 500;
    color: #313131;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain .ip-content .ip-value{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain .ip-content .istatus-progress{
    margin-top: 1rem;
  }
  .iprofileimg-contain .ip-content .ip-value .ivalue{
    color: #3b3b3b;
  } */
  /* .iprofileimg-contain .ip-content .ip-value-v1{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iprofileimg-contain .ip-content .ip-value-v2{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
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
  .istatus-timer{
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
  } */
</style>
