<template>
<div class="icarousel-slide-item" @click="gobuy">
  <b-card no-body class="icard-carousel">
    <!-- <b-card-body class="icarouse-contain"> -->
      <!-- <b-card-title>Card Title</b-card-title> -->
      <b-card-text>

        <div class="icarouse-nfts">
          <img :src="proSrc" class="icarouse-img" onerror="onerror=null;src='img/brand/imgno.png'" />
        </div>

        <div class="icarouse-infos">
          <div class="icard-content-title">{{propName}}</div>
          <div class="icard-content-lists">
            <div class="icard-content-list">
              <div class="icard-content-list-key">{{$t('page.pricevalue')}} : </div>
              <div class="icard-content-list-value"><img class="ieth_logo" src="../../assets/imgs/eth.png"/>{{proPrizeVal}}</div>
            </div>
            <div class="icard-content-list">
              <div class="icard-content-list-key">{{$t('page.progress')}} : </div>
              <div class="icard-content-list-value"> {{proProgress}}% </div>
            </div>
            <!-- <div class="iseal-content">
              <img src="../../assets/imgs/seal-eth.png" class="iseal-img" />
            </div> -->
          </div>
        </div>

      </b-card-text>
    <!-- </b-card-body> -->
  </b-card>
</div>
</template>

<script>
  import API from '../../util/network.js'
  export default{
    name:'carouselitemv2',
    data() {
      return {
        nid: ''
      }
    },props: {
      propId: {
        type: String,
        default:''
      },
      propName: {
        type: String,
        default:''
      },
      proSrc:{
        type:String,
        default:''
      },
      proPrizeVal:{
        type: String,
        default:''
      },
      proProgress:{
        type: String,
        default:''
      }
    },methods: {
      gobuy() {
        //Jump if the condition is ok
        this.$router.push({name:'carouselTrade', params:{id: this.propId}})
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");
  .card:hover{
    box-shadow:rgb(224 224 224 / 78%) 0px -1px 8px 2px;
  }
  .icard-carousel{
    width: 20rem;
    height: 28.777777rem;
    max-width: 360px;
    max-height: 518px;
    border-top-left-radius: 1.111111rem;
    border-top-right-radius: 1.111111rem;
    overflow: hidden;
  }
</style>
