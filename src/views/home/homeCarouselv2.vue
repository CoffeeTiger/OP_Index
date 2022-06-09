<template>
  <div class="icarousel-container">
    <div class="icarousel-outer">
      <carouselitemv2
               propId="nft000.jpg"
               propName="OP-20220314-1"
               :proSrc="require('../../assets/imgs/nfts/nft000.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2>
      <carouselitemv2
               propId="nft006.jpg"
               propName="OP-20220314-2"
               :proSrc="require('../../assets/imgs/nfts/nft006.jpg')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2>
      <carouselitemv2
               propId="nft002.jpg"
               propName="OP-20220314-3"
               :proSrc="require('../../assets/imgs/nfts/nft004.png')"
               proPrizeVal="0.1"
               proProgress="10"></carouselitemv2>

    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  import carouselitemv2 from '../../components/nfts/carouselitemv2.vue'

  export default{
    name:'homeCarouselv2',
    components: {carouselitemv2},
    data() {
      return {
        key: ''
      }
    },
  }
</script>

<style scoped="scoped">
  .icarousel-outer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
