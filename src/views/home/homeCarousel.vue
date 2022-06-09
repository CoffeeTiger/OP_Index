<template>
  <div class="icarousel-container">
    <Carousel class="icarousel" autoplay :perPageCustom="[[320, 1], [576, 1], [768, 2], [1180, 3]]"
      :navigationEnabled="true"
      navigationPrevLabel='<div class="icarousel-navigationLabel icarousel-navigationLabel-prev"><img class="icarousel-img" src="img/icons/common/car-left.png" /></div>'
      navigationNextLabel='<div class="icarousel-navigationLabel icarousel-navigationLabel-next"><img class="icarousel-img" src="img/icons/common/car-right.png" /></div>'
      paginationActiveColor="#8f75e5" paginationColor="#d8d8d8">

      <Slide><carouselitemv2
               propId="nft000.jpg"
               propName="OP-20220314-1"
               :proSrc="require('../../assets/imgs/nfts/nft000.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>
      <Slide><carouselitemv2
               propId="nft006.jpg"
               propName="OP-20220314-2"
               :proSrc="require('../../assets/imgs/nfts/nft006.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>

      <Slide><carouselitemv2
               propId="nft002.jpg"
               propName="OP-20220314-3"
               :proSrc="require('../../assets/imgs/nfts/nft004.png')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>

     <!-- <Slide><carouselitemv2
               propId="nft003.jpg"
               propName="OP-20220314-4"
               :proSrc="require('../../assets/imgs/nfts/nft003.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>

      <Slide><carouselitemv2
               propId="nft004.jpg"
               propName="OP-20220314-5"
               :proSrc="require('../../assets/imgs/nfts/nft004.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>

      <Slide><carouselitemv2
               propId="nft005.jpg"
               propName="OP-20220314-6"
               :proSrc="require('../../assets/imgs/nfts/nft005.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>

      <Slide><carouselitemv2
               propId="nft006.jpg"
               propName="OP-20220314-7"
               :proSrc="require('../../assets/imgs/nfts/nft006.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>
      <Slide><carouselitemv2
               propId="nft008.jpg"
               propName="OP-20220314-8"
               :proSrc="require('../../assets/imgs/nfts/nft007.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide>
      <Slide><carouselitemv2
               propId="nft008.jpg"
               propName="OP-20220314-9"
               :proSrc="require('../../assets/imgs/nfts/nft008.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2></Slide> -->


    </Carousel>

  </div>
</template>

<script>
  import api from '../../util/network.js'
  import {
    Carousel,
    Slide
  } from 'vue-carousel';
  /* import carouselitem from '../../components/nfts/carouselitem.vue' */
  import carouselitemv2 from '../../components/nfts/carouselitemv2.vue'
  export default{
    name:'homeCarousel',
    components: { Carousel, Slide, carouselitemv2},
    data() {
      return {
        key: ''
      }
    },created(){
      this.init()
    },methods: {
      init(){
        let that = this
        let pars = JSON.stringify({})
        api.postAction('/unlogin/indexpage/getActivityList', pars, function(res) {
          api.log(res)
          if (res.code == 200) {

          } else {
            /* api.iToastServer(that, res.code, 'info') */
          }
        })
      },

    },
  }
</script>

<style>
  .VueCarousel-inner{
    display: flex;
    flex-basis: auto !important;
    justify-content: space-between;
  }
</style>
