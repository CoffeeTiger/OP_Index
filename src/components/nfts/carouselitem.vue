<template>
<div class="icarousel-slide-item" @click="gobuy">
  <b-card
    :title="propName"
    :img-src="proSrc"
    :img-alt="propName"
    img-width="360px"
    img-height="420px"
    img-top
    tag="article"
    style="width: 360px; min-height: 500px; border-radius: 0.5rem; overflow: hidden;"
    class="mb-2"
  >

  <div class="icard-content-lists">
    <div class="icard-content-list">
      <div class="icard-content-list-key">Prize value : </div>
      <div class="icard-content-list-value"><img class="ieth_logo" src="../../assets/imgs/eth.png"/>{{proPrizeVal}}</div>
    </div>
    <div class="icard-content-list">
      <div class="icard-content-list-key">Progress : </div>
      <div class="icard-content-list-value"> {{proProgress}}% </div>
    </div>
    <div class="iseal-content">
      <img src="../../assets/imgs/seal-eth.png" class="iseal-img" />
    </div>
  </div>
    <!-- <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text> -->
  </b-card>
</div>
</template>

<script>
  import API from '../../util/network.js'
  export default{
    name:'carouselitem',
    data() {
      return {
        nid: 'xxx888'
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
    },created(){

    },methods: {
      gobuy() {
        //Jump if the condition is ok
        this.$router.push({path:'/carouselTrade', params:{id: this.propId}})
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");
  .card:hover{
    box-shadow:rgb(224 224 224 / 78%) 0px -1px 8px 2px;
  }
</style>
