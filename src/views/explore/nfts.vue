<template>
  <div class="icontainer-homepage">

    <div class="iactivey-popular ipadding-top-50">
      <nftsBanner></nftsBanner>
    </div>

    <div class="iactivity-btns">
      <div class="ibtn ibtn-import bg_lightgray">{{$t('page.importfromOpensea')}}</div>

      <router-link :to="{name:'publishlist'}">
        <div class="ibtn ibtn-publish bg_yellow color_black">{{$t('page.publish')}}</div>
      </router-link>
    </div>

    <div class="iactivity-lists">
      <div class="iheader">
        <div class="ititle color_yellow">{{$t('page.list')}}</div>
        <router-link :to="{name:'explorelist'}">
          <div class="imore">  <span>{{$t('page.more')}}</span><img src="../../assets/imgs/arrow-right.svg" class="imore-img"/>  </div>
        </router-link>
      </div>
      <homePublishLists></homePublishLists>
    </div>

  </div>
</template>

<script>
  import nftsBanner from './nftsBanner.vue'
  import homePublishLists from '../../components/nfts/homePublishLists.vue';

  export default{
    name:'nfts',
    components:{nftsBanner, homePublishLists}
  }
</script>

<style scoped>
  .iactivey-popular{
    width: 100%;
  }

  .iactivity-btns{
    width: 100%;
    margin: 2.2222rem 0;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iactivity-btns .ibtn-import{
    width: 19.2222rem;
    height: 5rem;
    line-height: 5rem;
    border-radius: 2.5rem;
    border: 0.1111rem solid #3C3C3C;
  }

  .iactivity-btns .ibtn-publish{
    width: 19.2222rem;
    height: 5rem;
    line-height: 5rem;
    border-radius: 2.5rem;
    border: 0.1111rem solid #3C3C3C;
    margin-left: 1.1111rem;
  }

  .iactivity-lists{
    width: 100%;
    margin-top: 6.1111rem;
  }
  .iactivity-lists .iheader{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.7777rem;
  }
  .iactivity-lists .iheader .ititle{
    line-height: 3.6666rem;
    font-size: 1.7777rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
  }

  .iactivity-lists .iheader .imore{
    line-height: 2.0555rem;
    font-size: 1.4444rem;
    font-weight: 400;
    color: #979797;
  }
  .iactivity-lists .iheader .imore .imore-img{
    width: 0.6666rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }

</style>
