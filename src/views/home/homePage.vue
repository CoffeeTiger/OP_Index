<template>
<div>


  <div class="icontainer-homepage">

    <div class="icontainer-hometop">
      <homeTop></homeTop>
    </div>

    <div class="marquee">
      <div class="con">
        <div class="cons cons1">OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span></div>
        <div class="cons"> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span> OPENPUBLISH <span class="color-violet">OPENPUBLISH</span>OPENPUBLISH <span class="color-violet">OPENPUBLISH</span></div>
      </div>
    </div>

    <div class="icarousel">
      <div class="ititle-frist">{{$t('page.listHot')}}</div>
      <div class="icont"><homeCarouselv2></homeCarouselv2></div>
    </div>

    <div class="ileader-minheigh">
      <div class="ileader-left">
        <b-button variant="outline-primary" class="ileader-btn">{{$t('page.importfromOpensea')}}</b-button>
        <b-button variant="primary" class="color-white ileader-btn" @click="publish"> &ensp; {{$t('page.publish')}} &ensp; </b-button>
      </div>
      <div class="ileader-right">
        <div class="ihome-more ihome-more-position"><!-- {{$t('page.learnmoreaboutOpenPublish')}}<b-icon icon="chevron-right" variant="Secondary"></b-icon> --> </div>
      </div>
    </div>

    <b-row class="mt-2">
      <b-col xl="12" class="mb-5 mb-xl-0">
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title ititle-frist">{{$t('page.list')}}</div>
          <div class="text-right ihome-list-more imore" @click="more">{{$t('page.more')}} <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
        <homePublishLists></homePublishLists>
      </b-col>
    </b-row>

  </div>
</div>
</template>

<script>
  /* import homeCarousel from './homeCarousel.vue' */
  import homeCarouselv2 from './homeCarouselv2.vue'
  import homeTop from './homeTop.vue'
  import homePublishLists from '../../components/nfts/homePublishLists.vue';

  export default{
    name:'homepage',
    components: {
      homeCarouselv2, homeTop, homePublishLists
    },
    data() {
      return {
        key: ''
      }
    },created(){

    },methods: {
      publish(){
        this.$router.push({name:'publishlist'})
      },
      more(){
        this.$router.push({path:'/explorelist'})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .ileader-btn{
    width: 16.666666rem!important;
    height: 3.944444rem !important;
    font-size: 1.222222rem !important;
    border-radius: 0.388888rem !important;
    border: 0.111111rem solid #4D5BF1 !important;
    font-weight: 600 !important;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .ihome-more-position{
    font-size: 1.111111rem !important;
  }
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    /* .ihome-more-position{
      float: left;
    } */
  }
  .marquee{
    width: 100%;
    margin: 4.444444rem 0;
    border-radius: 0.4rem;
    /* background-color: #6976fe; */
    overflow: hidden;
  }
  .marquee .con{
    width: 100%;
    line-height: 1.5rem;
    animation: marquee 60s linear infinite;
    animation-delay: 0s;
    position: relative;
    white-space: nowrap;
    /* color: #FFFFFF; */
    font-weight: 600;
    display: inline-block;
  }
  @keyframes marquee
  {
    0% {
          transform: translateX(100%);
      }
      100% {
          transform: translateX(-100%);
      }
  }
  .marquee .con .cons{
    display: inline;
  }
  .marquee .con .cons1{
    margin-left: -90%;
  }

  .icarousel{
    width: 100%;
  }
  .ititle-frist {
    line-height: 3.611111rem;
    font-size: 1.777777rem;
    font-weight: bold;
    margin-bottom: 3.638888rem;
    font-family: Montserrat-Bold, Montserrat;
  }


</style>
