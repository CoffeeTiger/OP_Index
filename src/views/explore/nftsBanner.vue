<template>
  <div>
    <div class="iact-list">
      <router-link :to="{name:'carouselTrade'}">
        <nftActivity nftid="001" name="Cryptomori001" src="nfts-example001.png" ethval="0.36" dolval="256.8" salenum="20" totalnum="100"></nftActivity>
      </router-link>

      <router-link :to="{name:'carouselTrade'}">
        <nftActivity nftid="002" name="Cryptomori002" src="nft000.jpg" ethval="0.3" dolval="456.8" salenum="50" totalnum="100"></nftActivity>
      </router-link>

      <router-link :to="{name:'carouselTrade'}">
        <nftActivity nftid="003" name="Cryptomori003" src="nft006.jpg" ethval="0.62" dolval="856.1" salenum="0" totalnum="100"></nftActivity>
      </router-link> 

    </div>
  </div>
</template>

<script>
  import nftActivity from '../../components/nfts/nftActivity.vue'
  export default{
    name:'nftsBanner',
    components:{nftActivity}
  }
</script>

<style scoped>
  .iact-list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
